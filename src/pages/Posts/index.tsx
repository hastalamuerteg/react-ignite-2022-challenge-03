import { useState } from 'react'
import { usePosts } from '@/hooks/usePosts'
import { useProfile } from '@/hooks/useProfile'

import { Container } from '@/components/Container'
import { PostCard } from './PostCard'
import { Profile } from './Profile'
import { Header, Form, Grid } from './style'

export const Posts = () => {
  const { profile } = useProfile()
  const [search, setSearch] = useState('')
  const { posts } = usePosts(search)

  return (
    <Container>
      {!!profile && <Profile user={profile} />}

      <Header>
        <strong>Publicações</strong>
        <span>{`${posts.length} publicações`}</span>
      </Header>

      <Form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Grid>
        {posts.map((post) => (
          <PostCard key={post.number} post={post} />
        ))}
      </Grid>
    </Container>
  )
}
