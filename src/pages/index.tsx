import { GetStaticProps } from 'next'
import Head from 'next/head'

import Hero from '../components/Hero'
import PracticeAreas from '../components/PracticeAreas'
import ExperienceBanner from '../components/ExperienceBanner'
import Attorneys from '../components/Attorneys'
import StatusBanner from '../components/Status'
import News from '../components/News'

import { Post } from '../types'

const { BLOG_URL, CONTENT_API_KEY } = process.env

const getPosts: Function = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,html,custom_excerpt,feature_image,id,created_at&include=tags,authors`
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

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props

  return (
    <>
      <Head>
        <title>Provan Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Hero />
      <PracticeAreas />
      <ExperienceBanner />
      <Attorneys />
      <StatusBanner />
      <News posts={posts} />
    </>
  )
}

export default Home
