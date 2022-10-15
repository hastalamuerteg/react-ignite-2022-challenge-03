import { useEffect, useState } from 'react'
import { GITHUB_REPOSITORY } from '@/config/github'
import { IPost } from '@/interfaces/post'
import { api } from '@/lib/api'

export const usePosts = (query: string) => {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = async (query: string) => {
    try {
      const response = await api.get('search/issues', {
        params: { q: `${query} repo:${GITHUB_REPOSITORY}` },
      })
      if (response?.data?.items) setPosts(response.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getPosts(query)
    }, 500)
  }, [query])

  return {
    posts,
  }
}
