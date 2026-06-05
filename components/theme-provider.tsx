"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderContextValue {
  theme: Theme
  resolvedTheme: "dark" | "light"
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeProviderContextValue | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("dark")
  const [mounted, setMounted] = React.useState(false)

  // Get system preference
  const getSystemTheme = React.useCallback((): "dark" | "light" => {
    if (typeof window === "undefined") return "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }, [])

  // Resolve theme to actual dark/light
  const resolveTheme = React.useCallback((t: Theme): "dark" | "light" => {
    if (t === "system") {
      return getSystemTheme()
    }
    return t
  }, [getSystemTheme])

  // Apply theme to document
  const applyTheme = React.useCallback((resolved: "dark" | "light") => {
    const root = document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(resolved)
    setResolvedTheme(resolved)
  }, [])

  // Initialize theme on mount
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    const initial = stored || defaultTheme
    setThemeState(initial)
    applyTheme(resolveTheme(initial))
    setMounted(true)
  }, [storageKey, defaultTheme, resolveTheme, applyTheme])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applyTheme(getSystemTheme())
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [mounted, theme, getSystemTheme, applyTheme])

  // Set theme function
  const setTheme = React.useCallback((newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme)
    setThemeState(newTheme)
    applyTheme(resolveTheme(newTheme))
  }, [storageKey, resolveTheme, applyTheme])

  // Prevent flash by defaulting to dark during SSR
  const value = React.useMemo(() => ({
    theme,
    resolvedTheme: mounted ? resolvedTheme : "dark",
    setTheme,
  }), [theme, resolvedTheme, mounted, setTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
