import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import styles from '../../styles/Header.module.css'

const HeaderBottom = ({ router }) => {
  return (
    <nav className={styles.main_nav}>
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
            <li>ABOUT US</li>
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
            <li>PRACTICE AREAS</li>
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
            <li>ATTORNEYS</li>
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
            offset={-80}
          >
            <li>NEWS</li>
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
            offset={20}
          >
            <li>CONTACT</li>
          </ScrollLink>
        )}
      </ul>
    </nav>
  )
}

export default HeaderBottom
