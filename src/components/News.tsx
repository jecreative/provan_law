import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Post } from '../types'
import Pagination from './Pagination'

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
    <NewsSection id='news'>
      <div className='news_header'>
        <div className='news_header_left'>
          <h1>Recent News</h1>
          <hr />
        </div>
        <div className='news_header_right'>
          <Pagination
            postsPerSection={postsPerSection}
            totalPosts={posts.length}
            paginate={paginate}
            currentPosts={currentPosts}
          />
        </div>
      </div>

      <div className='news_cards'>
        {visiblePosts.map((post) => (
          <div className='news_card' key={post.slug}>
            <div className='card_top'>
              <img
                src={post.feature_image}
                alt='News post image'
                width='100%'
                height='100%'
              />
            </div>
            <div className='card_bottom'>
              <h2 className='title'>{post.title}</h2>
              <h3 className='author'>
                By {post.authors[0].name} | {dayjs(post.created_at).fromNow()}
              </h3>
              <p className='body'>
                {post.custom_excerpt.substring(0, 100) + '...'}
              </p>
              <Link href='/news/[slug]' as={`/news/${post.slug}`}>
                <a className='news_btn'>View More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </NewsSection>
  )
}

const NewsSection = styled.section`
  width: 100%;
  height: 600px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;
  @media (max-width: 1200px) {
    padding: 0 7rem;
  }

  @media (max-width: 1024px) {
    padding: 0 3rem;
  }
  .news_header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 620px) {
      flex-direction: column;
    }
    .news_header_left {
      h1 {
        font-size: 2rem;
        color: #414141;
        margin-bottom: 0.5rem;
        text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
          0 0 2px rgba(58, 58, 58, 0.1);
      }
      hr {
        width: 125px;
        border: none;
        background: #c24343;
        height: 2px;
        margin-bottom: 3rem;
        @media (max-width: 620px) {
          margin-bottom: 0rem;
        }
      }
    }
    .news_header_right {
      display: flex;
      @media (max-width: 620px) {
        width: 100%;
      }
    }
  }

  .news_cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .news_card {
      width: 325px;
      height: 425px;
      box-shadow: 0 0 20px rgba(50, 50, 50, 0.3), 0 0 20px rgba(50, 50, 50, 0.1);
      .card_top {
        overflow: hidden;
        height: 50%;
        display: flex;
        align-content: stretch;
        align-items: stretch;
        justify-content: center;
        img {
          object-fit: cover;
          object-position: center;
        }
      }
      .card_bottom {
        padding: 12.5px 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        h2 {
          font-size: 1.1rem;
          color: #353535;
          letter-spacing: 0.01rem;
          margin: 0.25rem 0;
        }
        h3 {
          font-size: 0.85rem;
          font-weight: 400;
          color: #939393;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
            0 0 2px rgba(58, 58, 58, 0.1);
          margin-bottom: 0.75rem;
        }
        .body {
          font-size: 0.9rem;
          font-weight: 400;
          color: #4f4f4f;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
            0 0 2px rgba(58, 58, 58, 0.1);
          margin-bottom: 1.5rem;
        }
        .news_btn {
          border: 2px solid #c24343;
          background: white;
          color: #c24343;
          padding: 12.5px 15px;
          font-size: 0.9rem;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.1s ease-in-out;
          &:hover {
            border: 2px solid #c24343;
            background: #c24343;
            color: white;
          }
        }
      }
    }
  }
`

export default News
