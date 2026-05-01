'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/lib/api'
import { UserList } from '@/components/UserList'
import { SearchFilter } from '@/components/SearchFilter'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ActivityChart } from '@/components/ActivityChart'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')
  const [profession, setProfession] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['users', search, country, profession],
    queryFn: () => getUsers({ search, country, profession, limit: 50 }),
  })

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            ConnectHub 🌍
          </h1>
          <div className="flex gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Search */}
        <SearchFilter 
          onSearch={setSearch}
          onCountryChange={setCountry}
          onProfessionChange={setProfession}
        />

        {/* Chart */}
        <div className="mb-8">
          <ActivityChart />
        </div>

        {/* User List */}
        {isLoading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : (
          <UserList users={data?.users || []} />
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-400 border-t pt-6">
          ConnectHub — демо-проект для портфолио. Стек: Next.js 15, TypeScript, TanStack Query, Zustand, i18n
        </footer>
      </div>
    </main>
  )
}