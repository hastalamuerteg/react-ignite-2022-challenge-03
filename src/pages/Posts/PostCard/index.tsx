import removeMd from 'remove-markdown'
import { IPost } from '@/interfaces/post'
import { dateFormat } from '@/utils/dateFormat'
import { CardLink, Card } from './style'

export const PostCard = ({ post }: { post: IPost }) => {
  const body = removeMd(post.body).split('.')[0]

  return (
    <CardLink to={`/posts/${post.number}`}>
      <Card>
        <header>
          <h3>{post.title}</h3>
          <time>{dateFormat.fomatDistance(post.created_at)}</time>
        </header>
        <p>{`${body.substring(0, 200)}...`}</p>
      </Card>
    </CardLink>
  )
}
