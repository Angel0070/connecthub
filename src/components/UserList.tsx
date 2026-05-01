'use client'

import { User } from '@/types/user'
import { UserCard } from './UserCard'

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  if (users.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 dark:text-gray-500">
        👥 No users found. Try adjusting your filters.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}