import { User } from '@/types/user'

const MOCK_USERS: User[] = [
  { id: '1', name: 'Анна Коваленко', avatar: 'https://i.pravatar.cc/150?img=1', profession: 'Software Engineer', country: 'Ukraine', experience: '5 лет' },
  { id: '2', name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=2', profession: 'Product Manager', country: 'USA', experience: '8 лет' },
  { id: '3', name: 'Sophie Müller', avatar: 'https://i.pravatar.cc/150?img=3', profession: 'UX Designer', country: 'Germany', experience: '4 года' },
  { id: '4', name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=4', profession: 'DevOps', country: 'UK', experience: '6 лет' },
  { id: '5', name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?img=5', profession: 'Data Scientist', country: 'Spain', experience: '3 года' },
  { id: '6', name: 'Dmitry Volkov', avatar: 'https://i.pravatar.cc/150?img=6', profession: 'Software Engineer', country: 'Russia', experience: '7 лет' },
  { id: '7', name: 'Emily Johnson', avatar: 'https://i.pravatar.cc/150?img=7', profession: 'Sales', country: 'Canada', experience: '4 года' },
  { id: '8', name: 'Ahmed Al Mansouri', avatar: 'https://i.pravatar.cc/150?img=8', profession: 'Software Engineer', country: 'UAE', experience: '2 года' },
  { id: '9', name: 'Olivia Martin', avatar: 'https://i.pravatar.cc/150?img=9', profession: 'Product Manager', country: 'France', experience: '6 лет' },
  { id: '10', name: 'Ivan Petrov', avatar: 'https://i.pravatar.cc/150?img=10', profession: 'DevOps', country: 'Russia', experience: '5 лет' },
]

interface GetUsersParams {
  search?: string
  country?: string
  profession?: string
  limit?: number
}

export async function getUsers({ search = '', country = '', profession = '', limit = 20 }: GetUsersParams) {
  // Симуляция задержки API
  await new Promise(resolve => setTimeout(resolve, 500))

  let filtered = [...MOCK_USERS]

  if (search) {
    filtered = filtered.filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.profession.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (country) {
    filtered = filtered.filter(u => u.country === country)
  }

  if (profession) {
    filtered = filtered.filter(u => u.profession === profession)
  }

  return {
    users: filtered.slice(0, limit),
    total: filtered.length,
  }
}