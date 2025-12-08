"use client"

import { Theme, ThemeName, themes } from "@/constants/themes"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type ThemeContextType = {
  theme: Theme
  themeName: ThemeName
  setTheme: (themeName: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('dark')
  const [theme, setThemeState] = useState<Theme>(themes.dark)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeName
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme)
      setThemeState(themes[savedTheme])
    }
  }, [])

  useEffect(() => {
    // Apply theme CSS variables
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${key}`, value)
      } else if (key === 'syntax') {
        Object.entries(value).forEach(([syntaxKey, syntaxValue]) => {
          root.style.setProperty(`--color-syntax-${syntaxKey}`, syntaxValue)
        })
      }
    })
  }, [theme])

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName)
    setThemeState(themes[newThemeName])
    localStorage.setItem('theme', newThemeName)
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}