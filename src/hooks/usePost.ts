import { useEffect, useState } from 'react'
import { IPost } from '@/interfaces/post'
import { api } from '@/lib/api'
import { GITHUB_REPOSITORY } from '@/config/github'

export const usePost = (postId: string) => {
  const [post, setPost] = useState<IPost | null>(null)

  const getCurrentPost = async (postId: string) => {
    try {
      const response = await api.get(
        `repos/${GITHUB_REPOSITORY}/issues/${postId}`,
      )
      if (response?.data) setPost(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCurrentPost(postId)
  }, [postId])

  return {
    post,
  }
}
