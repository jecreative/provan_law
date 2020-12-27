import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import styles from '../../styles/Header.module.css'

const HeaderBottom = ({ router }) => {
  return (
    <nav className={styles.main_nav}>
      <ul>
        <Link href='/'>
          <li
            style={{ cursor: 'pointer' }}
            className={router.pathname === '/' ? styles.active : ''}
          >
            <a>HOME</a>
          </li>
        </Link>

        {router.pathname.includes('news') ? (
          <Link href='/#about'>
            <li>
              <a>ABOUT US</a>
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
          >
            <li>ABOUT US</li>
          </ScrollLink>
        )}

        {/* <Link href='/about'>
          <li>
            <a>ABOUT US</a>
          </li>
        </Link> */}

        {router.pathname.includes('news') ? (
          <Link href='/#services'>
            <li>
              <a>PRACTICE AREAS</a>
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
          >
            <li>PRACTICE AREAS</li>
          </ScrollLink>
        )}

        {router.pathname.includes('news') ? (
          <Link href='/#attorneys'>
            <li>
              <a>ATTORNEYS</a>
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='attorneys'
            spy={true}
            smooth={true}
            duration={600}
            offset={-30}
          >
            <li>ATTORNEYS</li>
          </ScrollLink>
        )}

        {/* {router.pathname.includes('news') ? (
          <Link href='/#news'>
            <li className={router.pathname.includes('news') ? 'active' : ''}>
              <a> NEWS</a>
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='news'
            spy={true}
            smooth={true}
            duration={600}
            offset={-80}
          >
            <li>NEWS</li>
          </ScrollLink>
        )} */}

        {router.pathname.includes('news') ? (
          <Link href='/#contact'>
            <li>
              <a>CONTACT</a>
            </li>
          </Link>
        ) : (
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
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
