import { useState, useEffect } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Post } from '../types'
import Pagination from './Pagination'
import styles from '../styles/News.module.css'

dayjs.extend(relativeTime)

const News: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props
  const [currentPosts, setCurrentPosts] = useState(1)
  const [postsPerSection, setPostsPerSection] = useState(3)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.outerWidth < 700) {
        setPostsPerSection(1)
        setCurrentPosts(currentPosts)
      }
      if (window.outerWidth > 700 && window.outerWidth < 920) {
        setPostsPerSection(2)
        setCurrentPosts(currentPosts)
      }
      if (window.outerWidth > 920) {
        setPostsPerSection(3)
        setCurrentPosts(currentPosts)
      }
    })
    window.addEventListener('load', () => {
      if (window.outerWidth < 700) {
        setPostsPerSection(1)
        setCurrentPosts(currentPosts)
      }
      if (window.outerWidth > 700 && window.outerWidth < 920) {
        setPostsPerSection(2)
        setCurrentPosts(currentPosts)
      }
      if (window.outerWidth > 920) {
        setPostsPerSection(3)
        setCurrentPosts(currentPosts)
      }
    })
  }, [])

  const indexOfLastPost = currentPosts * postsPerSection
  const indexOfFirstPost = indexOfLastPost - postsPerSection
  const visiblePosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber): any => setCurrentPosts(pageNumber)

  return (
    <section className={styles.news}>
      <div className={styles.news_header}>
        <div className={styles.news_header_left}>
          <h1>Recent News</h1>
          <hr />
        </div>
        <div className={styles.news_header_right}>
          <Pagination
            postsPerSection={postsPerSection}
            totalPosts={posts.length}
            paginate={paginate}
            currentPosts={currentPosts}
          />
        </div>
      </div>

      <div className={styles.news_cards}>
        {visiblePosts.map((post) => (
          <div className={styles.news_card} key={post.slug}>
            <div className={styles.card_top}>
              <img
                src={post.feature_image}
                alt='News post image'
                width='100%'
                height='100%'
              />
            </div>
            <div className={styles.card_bottom}>
              <h2 className={styles.title}>{post.title}</h2>
              <h3 className={styles.author}>
                By {post.authors[0].name} | {dayjs(post.created_at).fromNow()}
              </h3>
              <p className={styles.body}>
                {post.custom_excerpt.substring(0, 100) + '...'}
              </p>
              <Link href='/news/[slug]' as={`/news/${post.slug}`}>
                <a className={styles.news_btn}>View More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News
