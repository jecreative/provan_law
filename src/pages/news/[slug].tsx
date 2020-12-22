import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import styles from '../../styles/NewsPost.module.css'
import { Post } from '../../types'

dayjs.extend(relativeTime)

const { BLOG_URL, CONTENT_API_KEY } = process.env

const getPost: Function = async (slug: string) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,custom_excerpt,feature_image,id,created_at&include=tags,authors`
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

const PostSlug: React.FC<{ post: Post }> = (props) => {
  const { post } = props
  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true)

  const router = useRouter()
  if (router.isFallback) {
    return (
      <div
        style={{
          width: '100vw',
          height: '90vh',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <img
          src='/images/spinner.gif'
          alt='Loading...'
          width='300px'
          height='300px'
        />
      </div>
    )
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
    <>
      <Head>
        <title>News: {post.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <section className={styles.post}>
        <h3>
          By {post.authors[0].name} •{' '}
          {dayjs(post.created_at).format('MM/DD/YYYY')}
        </h3>
        <h1>{post.title}</h1>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <p className={styles.tag} key={tag.id}>
              {tag.name}
            </p>
          ))}
        </div>
        <hr />
        {enableLoadComments && (
          <div className={styles.comments_btn} onClick={loadComments}>
            <a>Load Comments</a>
          </div>
        )}

        <div id='disqus_thread' className={styles.comments}></div>
      </section>
    </>
  )
}

export default PostSlug
