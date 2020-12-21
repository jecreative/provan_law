import Link from 'next/link'
import styles from '../styles/Home.module.scss'

type Post = {
  title: string
  slug: string
  feature_image: string
}

const PostCard: React.FC<{ post: Post }> = (props) => {
  const { post } = props

  return (
    <div className={styles.post}>
      <Link href='/[slug]' as={`/${post.slug}`}>
        <a style={{ margin: '1rem 0rem' }}>{post.title}</a>
      </Link>

      <Link href='/post/[slug]' as={`/post/${post.slug}`}>
        <a>
          <img src={post.feature_image} alt='' />
        </a>
      </Link>
    </div>
  )
}

export default PostCard
