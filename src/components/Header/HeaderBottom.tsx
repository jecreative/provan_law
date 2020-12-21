import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

const HeaderBottom = ({ router }) => {
  return (
    <Nav>
      <ul>
        <Link href='/'>
          <li
            className={router.pathname === '/' ? 'active' : ''}
            style={{ cursor: 'pointer' }}
          >
            HOME
          </li>
        </Link>

        {router.pathname.includes('news') ? (
          <Link href='/#about'>
            <li>ABOUT US</li>
          </Link>
        ) : (
          <ScrollLink
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li>About Us</li>
          </ScrollLink>
        )}

        {router.pathname.includes('news') ? (
          <Link href='/#services'>
            <li>PRACTICE AREAS</li>
          </Link>
        ) : (
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li>Practice Areas</li>
          </ScrollLink>
        )}

        {router.pathname.includes('news') ? (
          <Link href='/#attorneys'>
            <li>ATTORNEYS</li>
          </Link>
        ) : (
          <ScrollLink
            to='attorneys'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-30}
          >
            <li>Attorneys</li>
          </ScrollLink>
        )}

        {router.pathname.includes('news') ? (
          <Link href='/#news'>
            <li className={router.pathname.includes('news') ? 'active' : ''}>
              NEWS
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='news'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
          >
            <li>News</li>
          </ScrollLink>
        )}

        {router.pathname.includes('news') ? (
          <Link href='/#contact'>
            <li>CONTACT</li>
          </Link>
        ) : (
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li>Contact</li>
          </ScrollLink>
        )}
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
    color: #8c8c8c;
    li {
      height: 100%;
      display: grid;
      place-items: center;
      padding: 0.4rem 1.5rem;
      cursor: pointer;
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
    }
  }
`

export default HeaderBottom
