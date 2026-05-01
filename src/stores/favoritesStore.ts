import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesStore {
  favorites: string[]
  toggleFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
    }),
    { name: 'favorites-storage' }
  )
)