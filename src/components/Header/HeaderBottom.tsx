import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

const HeaderBottom = ({ router }) => {
  return (
    <Nav>
      <ul>
        <ScrollLink
          to='header'
          className={router.pathname === '/' ? 'active' : undefined}
        >
          <li>Home</li>
        </ScrollLink>

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

        <ScrollLink
          to='attorneys'
          spy={true}
          smooth={true}
          duration={600}
          exact='true'
          offset={0}
        >
          <li>Attorneys</li>
        </ScrollLink>

        <Link href='/post'>
          <a>
            <li>News</li>
          </a>
        </Link>

        <ScrollLink
          to='contact'
          spy={true}
          smooth={true}
          duration={600}
          exact='true'
          offset={-25}
        >
          <li>Contact Us</li>
        </ScrollLink>
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
