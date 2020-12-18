import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import PostCard from '../../components/PostCard'

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
  title: string
  slug: string
  feature_image: string
}

const getPosts: Function = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image`
  ).then((res) => res.json())

  const posts = res.posts
  return posts
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: Object = await getPosts()

  return {
    props: { posts },
    revalidate: 10,
  }
}

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ margin: '3rem 0rem' }}>
        Welcome 😊
      </h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  )
}

export default Blog
