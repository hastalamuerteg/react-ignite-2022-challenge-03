import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { useParams } from 'react-router-dom'
import { Container } from '@/components/Container'
import { PostHeader } from './PostHeader'
import { usePost } from '@/hooks/usePost'
import { PostContent } from './style'

export const Post = () => {
  const { id: postId } = useParams()
  const { post } = usePost(postId ?? '')

  if (!post) return null

  return (
    <Container>
      <PostHeader post={post} />

      <PostContent>
        <ReactMarkdown
          children={post.body}
          className="react-markdown"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className ?? '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={nord as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostContent>
    </Container>
  )
}
