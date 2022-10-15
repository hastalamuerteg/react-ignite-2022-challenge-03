import { Routes, Route, Navigate } from 'react-router-dom'
import { Posts } from '@/pages/Posts'
import { Post } from '@/pages/Post'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="posts" />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  )
}
