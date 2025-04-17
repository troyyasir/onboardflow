"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const isDarkMode = theme === "dark"

  const handleCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${isDarkMode ? 'text-muted-foreground' : 'text-primary'}`} />
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleCheckedChange}
        aria-label="Toggle theme"
      />
      <Moon className={`h-5 w-5 ${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
    </div>
  )
}
