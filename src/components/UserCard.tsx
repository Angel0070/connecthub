'use client'

import { User } from '@/types/user'
import { useFavoritesStore } from '@/stores/favoritesStore'
import Image from 'next/image'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const { favorites, toggleFavorite } = useFavoritesStore()
  const isFavorite = favorites.includes(user.id)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100 dark:border-gray-700">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image src={user.avatar} alt={user.name} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            {user.name}
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400">{user.profession}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            📍 {user.country}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
              {user.experience}
            </span>
          </div>
        </div>

        {/* Favorite button */}
        <button
          onClick={() => toggleFavorite(user.id)}
          className="text-2xl transition hover:scale-110 flex-shrink-0"
        >
          {isFavorite ? '⭐️' : '☆'}
        </button>
      </div>
    </div>
  )
}