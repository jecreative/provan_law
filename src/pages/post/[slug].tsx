import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss'

const { BLOG_URL, CONTENT_API_KEY } = process.env

const getPost: Function = async (slug: string) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json())

  const posts = res.posts
  return posts[0]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Object = await getPost(params.slug)

  return {
    props: { post },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //* paths --> slugs that are allowed
    paths: [],
    fallback: true,
  }
}

type Post = {
  title: string
  html: string
  slug: string
}

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props
  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true)

  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const loadComments = () => {
    setEnableLoadComments(false)
    ;(window as any).disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = post.slug
    }

    const script = document.createElement('script')
    script.src = 'https://ghostcms-nextjs-16.disqus.com/embed.js'
    script.setAttribute('data-timestamp', Date.now().toString())
    document.body.appendChild(script)
  }
  return (
    <div className={styles.container}>
      <div className={styles.goBack}>
        <Link href='/post'>
          <a>Go Back</a>
        </Link>
      </div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      {enableLoadComments && (
        <div className={styles.goBack} onClick={loadComments}>
          <a>Load Comments</a>
        </div>
      )}
      <hr />
      <div id='disqus_thread'></div>
    </div>
  )
}

export default Post
