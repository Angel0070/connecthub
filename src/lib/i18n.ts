import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      search: 'Search by name or profession...',
    }
  },
  ru: {
    translation: {
      search: 'Поиск по имени или профессии...',
    }
  }
}

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n