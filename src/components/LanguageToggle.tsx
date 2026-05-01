'use client'

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const currentLang = i18n.language

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLang = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  // Пока компонент не смонтирован на клиенте — показываем заглушку
  if (!mounted) {
    return (
      <button className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        ...
      </button>
    )
  }

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {currentLang === 'en' ? '🇷🇺 RU' : '🇬🇧 EN'}
    </button>
  )
}