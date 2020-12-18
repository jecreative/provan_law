import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const HeaderBottom = ({ router }) => {
  return (
    <Nav>
      <ul>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : undefined}>
            <li>Home</li>
          </a>
        </Link>

        <Link href='/about'>
          <a className={router.pathname === '/about' ? 'active' : undefined}>
            <li>About Us</li>
          </a>
        </Link>

        <Link href='/practiceareas'>
          <a>
            <li>Practice Areas</li>
          </a>
        </Link>

        <Link href='/casestudies'>
          <a>
            {' '}
            <li>Attorneys</li>
          </a>
        </Link>

        <Link href='/post'>
          <a>
            <li>News</li>
          </a>
        </Link>

        <Link href='/contact'>
          <a>
            {' '}
            <li>Contact Us</li>
          </a>
        </Link>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 0 3rem;
  font-weight: 600;

  @media (max-width: 925px) {
    display: none;
  }
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      height: 100%;
      display: grid;
      place-items: center;
      padding: 0.4rem 1.5rem;
      &:hover {
        border-bottom: 2px solid #c24343;
        color: #c24343;
      }
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9375em;
      text-transform: uppercase;
      cursor: pointer;
      color: #8c8c8c;
      pointer-events: all;
      &.active {
        color: #c24343;
        border-bottom: 2px solid #c24343;
      }
    }
  }
`

export default HeaderBottom
