import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShareLink } from '@/components/ShareLink'
import { GoBackButton } from '@/components/GoBackButton'
import { IPost } from '@/interfaces/post'
import { dateFormat } from '@/utils/dateFormat'
import {
  PostHeaderContainer,
  PostHeaderActions,
  PostInformation,
  PostInfo,
} from './style'
import { CalendarIcon, CommentIcon, GithubIcon } from '@/lib/icons'

export const PostHeader = ({ post }: { post: IPost }) => {
  return (
    <PostHeaderContainer>
      <PostHeaderActions>
        <GoBackButton label="Voltar" />
        <ShareLink label="Ver no github" href={post.html_url} />
      </PostHeaderActions>

      <h1>{post.title}</h1>

      <PostInformation>
        <PostInfo>
          <FontAwesomeIcon icon={GithubIcon} />
          <span>{post.user.login}</span>
        </PostInfo>

        <PostInfo>
          <FontAwesomeIcon icon={CalendarIcon} />
          <span>{dateFormat.fomatDistance(post.created_at)}</span>
        </PostInfo>

        <PostInfo>
          <FontAwesomeIcon icon={CommentIcon} />
          <span>{`${post.comments} comentários`}</span>
        </PostInfo>
      </PostInformation>
    </PostHeaderContainer>
  )
}
