import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import HeaderBottom from './HeaderBottom'

const HeaderCenter = ({ router }) => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <StyledHeaderCenter>
      <div className='headerCenter_left'>
        <div id='logo'>
          <Link href='/'>
            <a>
              <Image
                src='/provanLaw_logo.svg'
                alt='logo'
                width='100%'
                height='100%'
              />
            </a>
          </Link>
        </div>
      </div>
      <div className='headerCenter_right'>
        <a href='tel:1(619) 234-3908'>
          <i className='fas fa-mobile-alt'></i>
        </a>
        <div className='info'>
          <p>
            <a href='tel:1(619) 234-3908'>
              1(619) 234-3908 <span>CALL US TODAY!</span>
            </a>
          </p>
        </div>
        <i className='far fa-clock'></i>
        <div className='info'>
          <p>
            Mon-Fri 8:30am - 5:00pm
            <span>Sat & Sun Closed</span>
          </p>
        </div>
        <div className='consultBtn'>
          <Link href='/contact'>
            <a>Free Consultation</a>
          </Link>
        </div>
      </div>
      {/* Mobile Nav Toggle */}
      <MobileNavToggle onClick={() => setMobileNav(!mobileNav)}>
        <i className={mobileNav ? 'fas fa-plus active' : 'fas fa-plus'}></i>
      </MobileNavToggle>
      {/* Mobile Nav */}
      <MobileNav className={mobileNav ? 'active' : ''}>
        <h3>Menu</h3>
        <ul>
          <Link href='/'>
            <a className={router.pathname === '/' ? 'active' : undefined}>
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fas fa-home'></i>
                Home
              </li>
            </a>
          </Link>

          <Link href='/about'>
            <a className={router.pathname === '/about' ? 'active' : undefined}>
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fas fa-info'></i>
                About
              </li>
            </a>
          </Link>

          <Link href='/practiceareas'>
            <a>
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fas fa-balance-scale-left'></i>
                Practice Areas
              </li>
            </a>
          </Link>

          <Link href='/casestudies'>
            <a>
              {' '}
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fas fa-book'></i>
                Case Studies
              </li>
            </a>
          </Link>

          <Link href='/post'>
            <a>
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fab fa-microblog'></i>
                Blog
              </li>
            </a>
          </Link>

          <Link href='/contact'>
            <a>
              {' '}
              <li onClick={() => setMobileNav(!mobileNav)}>
                <i className='fas fa-paper-plane'></i>
                Contact
              </li>
            </a>
          </Link>
        </ul>
      </MobileNav>
    </StyledHeaderCenter>
  )
}

const StyledHeaderCenter = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: solid#d8d8d8;
  border-bottom-width: thin;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 0 3rem;
  position: relative;
  @media (max-width: 400px) {
    padding: 0 1rem;
  }

  .headerCenter_left {
    flex: 20%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 925px) {
      flex: 40%;
    }
    img {
      width: 200px;
      height: 100px;
    }
  }
  .headerCenter_right {
    flex: 80%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 925px) {
      display: none;
    }
    i {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      border: 2px solid #c24343;
      border-radius: 50%;
      font-size: 1.5rem;
      color: #c24343;
      cursor: pointer;
      transition: 0.1s ease-in-out;
      margin: 0 1rem;
      &:hover {
        background: #c24343;
        color: white;
      }
    }
    .info {
      p {
        color: #2f4c65;
        font-weight: 500;
        font-size: 1.1rem;
      }
      span {
        display: block;
        font-weight: 500;
        font-size: 0.8rem;
        color: #555555;
        margin-top: 0.15rem;
      }
    }
    .consultBtn a {
      border: 2px solid #c24343;
      padding: 12.5px 15px;
      margin-left: 2.5rem;
      background: #c24343;
      color: white;
      font-size: 0.9rem;
      border-radius: 2px;
      transition: all 0.1s ease-in-out;
      &:hover {
        border: 2px solid #c24343;
        background: white;
        color: #c24343;
      }
    }
  }
`

const MobileNavToggle = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 1.1rem;
  .fas.fa-plus {
    transform: rotate(0deg);
    transition: all 0.1s ease-in-out;
  }
  .fas.fa-plus.active {
    transform: rotate(-45deg);
  }
  @media (min-width: 925px) {
    display: none;
  }
`

const MobileNav = styled.nav`
  background: white;
  height: 84vh;
  width: 100vw;
  position: absolute;
  top: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 20px;
  z-index: 100;
  @media (min-width: 925px) {
    display: none;
  }
  &.active {
    transform: translateX(0%);
  }
  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: #5e5e5e;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0 0.5rem;
  }
  ul {
    width: 100%;
    margin-top: 0.25rem;
    li {
      height: 8.5vh;
      margin: 1rem 0;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      padding: 0 0.5rem;
      border-radius: 10px;
      color: #2c3a4d;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: rgba(194, 67, 67, 0.228);
      }
      i {
        width: 50px;
        height: 50px;

        display: grid;
        place-items: center;
        border-radius: 50%;
        margin-right: 1rem;
        background-color: #c24343;
        color: white;
      }
    }
  }
`

export default HeaderCenter
