import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import styles from '../styles/Home.module.scss'
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
      <StyledPost>
        <h3>
          By {post.authors[0].name} •{' '}
          {dayjs(post.created_at).format('MM/DD/YYYY')}
        </h3>
        <h1>{post.title}</h1>
        <div
          className='body'
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <div className='tags'>
          {post.tags.map((tag) => (
            <p className='tag' key={tag.id}>
              {tag.name}
            </p>
          ))}
        </div>
        <hr />
        {enableLoadComments && (
          <div className='comments-btn' onClick={loadComments}>
            <a>Load Comments</a>
          </div>
        )}

        <Comments id='disqus_thread'></Comments>
      </StyledPost>
    </>
  )
}

const StyledPost = styled.section`
  position: relative;
  min-height: 90vh;
  padding: 0 20rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid#d8d8d8;
  @media (max-width: 1200px) {
    padding: 0 15rem;
    padding-top: 3rem;
  }
  @media (max-width: 1024px) {
    padding: 0 12rem;
    padding-top: 3rem;
  }
  @media (max-width: 920px) {
    padding: 0 8rem;
    padding-top: 3rem;
  }
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 0 3rem;
    padding-top: 3rem;
    display: flex;
  }
  h3 {
    color: rgba(14, 30, 37, 0.54);
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .body {
    width: 100%;
    height: 100%;
    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    img {
      width: 100%;
      max-height: 500px;
      margin: 2rem 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong,
    li,
    p {
      margin-bottom: 0.75rem;
    }
  }
  .tags {
    margin: 2rem 0rem;
    .tag {
      background: gray;
      display: inline;
      margin-right: 1rem;
      padding: 0.2rem 0.65rem;
      border-radius: 5px;
      color: white;
      font-size: 0.9rem;
    }
  }
  hr {
    margin: 2rem 0rem;
    margin-bottom: 4rem;
  }
  .comments-btn {
    width: 200px;
    text-align: left;
    padding: 1rem 2rem;
    text-align: center;
    border: 2px solid rgb(42, 42, 42);
    cursor: pointer;
    &:hover {
      background: rgb(42, 42, 42);
      color: white;
    }
  }
`

const Comments = styled.div`
  margin-top: 2rem;
`

export default PostSlug
