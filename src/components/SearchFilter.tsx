'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SearchFilterProps {
  onSearch: (term: string) => void
  onCountryChange: (country: string) => void
  onProfessionChange: (profession: string) => void
}

const COUNTRIES = ['All', 'USA', 'UK', 'Germany', 'France', 'Canada', 'UAE', 'India']
const PROFESSIONS = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'DevOps', 'Sales']

export function SearchFilter({ onSearch, onCountryChange, onProfessionChange }: SearchFilterProps) {
  const { t } = useTranslation()
  const [searchLocal, setSearchLocal] = useState('')

  const handleSearch = (value: string) => {
    setSearchLocal(value)
    onSearch(value)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <input
          type="text"
          placeholder={t('search')}
          value={searchLocal}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Country filter */}
        <select
          onChange={(e) => onCountryChange(e.target.value === 'All' ? '' : e.target.value)}
          className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          {COUNTRIES.map(c => <option key={c}>{c}</option>)}
        </select>

        {/* Profession filter */}
        <select
          onChange={(e) => onProfessionChange(e.target.value === 'All' ? '' : e.target.value)}
          className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          {PROFESSIONS.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>
    </div>
  )
}