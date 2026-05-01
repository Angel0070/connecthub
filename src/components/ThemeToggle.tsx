'use client'

import { useThemeStore } from '@/stores/themeStore'
import { useEffect } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}