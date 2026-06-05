import { NextResponse } from "next/server"

const PUSHOVER_APP_TOKEN = process.env.PUSHOVER_APP_TOKEN
const PUSHOVER_USER_KEY = process.env.PUSHOVER_USER_KEY
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL
const RESEND_API_KEY = process.env.RESEND_API_KEY

async function sendPushover(title: string, message: string, url?: string) {
  const params = new URLSearchParams({
    token: PUSHOVER_APP_TOKEN!,
    user: PUSHOVER_USER_KEY!,
    title,
    message,
    html: "1",
    priority: "1",
    sound: "cashregister",
  })

  if (url) {
    params.set("url", url)
    params.set("url_title", "Reply via Email")
  }

  const res = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(`Pushover error: ${JSON.stringify(errorData)}`)
  }

  return res.json()
}

async function sendEmail(to: string, subject: string, text: string, replyTo?: string) {
  if (!RESEND_API_KEY) return null

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vanity Fur <support@bindriveshine.com>",
      to: [to],
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  })

  if (!res.ok) {
    const errorData = await res.json()
    console.error("Resend email error:", errorData)
  }

  return res.json()
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      petName,
      petType,
      breed,
      service,
      preferredDate,
      preferredTime,
      message,
    } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    // Format pet info with breed
    const petInfo = petName 
      ? `${petName}${petType ? ` (${petType}${breed ? ` - ${breed}` : ""})` : breed ? ` - ${breed}` : ""}`
      : petType 
        ? `${petType}${breed ? ` - ${breed}` : ""}`
        : breed || null

    // Pushover notification message (supports HTML)
    const pushoverMessage = [
      `<b>Name:</b> ${name}`,
      `<b>Phone:</b> ${phone}`,
      `<b>Email:</b> ${email}`,
      petInfo ? `<b>Pet:</b> ${petInfo}` : null,
      service ? `<b>Service:</b> ${service}` : null,
      preferredDate ? `<b>Date:</b> ${preferredDate}` : null,
      preferredTime ? `<b>Time:</b> ${preferredTime}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n")

    // Full details for email backup
    const fullEmailBody = `
New Contact Form Submission
============================
Name: ${name}
Phone: ${phone}
Email: ${email}
${petName ? `Pet Name: ${petName}` : ""}
${petType ? `Pet Type: ${petType}` : ""}
${breed ? `Breed: ${breed}` : ""}
${service ? `Service Requested: ${service}` : ""}
${preferredDate ? `Preferred Date: ${preferredDate}` : ""}
${preferredTime ? `Preferred Time: ${preferredTime}` : ""}

Message:
${message}
`.trim()

    // Send push notification via Pushover
    if (PUSHOVER_APP_TOKEN && PUSHOVER_USER_KEY) {
      try {
        await sendPushover(
          `New Booking: ${name}`,
          pushoverMessage,
          `mailto:${email}`,
        )
      } catch (pushError) {
        console.error("Pushover send failed:", pushError)
      }
    } else {
      console.log("Pushover not configured. Message:", pushoverMessage)
    }

    // Also send full email notification if Resend is configured
    if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
      try {
        await sendEmail(
          NOTIFICATION_EMAIL,
          `New Booking Request from ${name}`,
          fullEmailBody,
          email,
        )
      } catch (emailError) {
        console.error("Email send failed:", emailError)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent! We will contact you shortly.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 },
    )
  }
}
