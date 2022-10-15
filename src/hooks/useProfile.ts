import { useEffect, useState } from 'react'
import { GITHUB_USERNAME } from '@/config/github'
import { IUser } from '@/interfaces/user'
import { api } from '@/lib/api'

export const useProfile = () => {
  const [profile, setProfile] = useState<IUser | null>(null)

  const getProfile = async () => {
    try {
      const response = await api.get(`users/${GITHUB_USERNAME}`)
      if (response.data) setProfile(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return {
    profile,
  }
}
