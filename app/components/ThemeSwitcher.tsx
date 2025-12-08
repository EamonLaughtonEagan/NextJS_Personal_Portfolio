"use client"

import { Palette, Check } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "../contexts/ThemeProvider"
import { ThemeName, themes } from "@/constants/themes"

export default function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-700 rounded-md transition-colors flex items-center gap-2"
        aria-label="Change theme"
      >
        <Palette size={20} className="text-gray-400" />
        <span className="hidden sm:inline text-sm text-gray-400">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-sidebar border border-line rounded-md shadow-lg z-50 min-w-40">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key as ThemeName)
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors flex items-center justify-between gap-3 first:rounded-t-md last:rounded-b-md"
            >
              <span className="text-sm text-foreground">{theme.name}</span>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border border-line"
                  style={{ backgroundColor: theme.colors.highlight }}
                />
                {themeName === key && <Check size={16} className="text-highlight" />}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}