import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

import styles from '../../styles/Header.module.css'

const HeaderCenter = ({ router }) => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className={styles.header_center}>
      <div className={styles.headerCenter_left}>
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
      <div className={styles.headerCenter_right}>
        <a href='tel:1(619) 234-3908'>
          <i className='fas fa-mobile-alt'></i>
        </a>
        <div className={styles.info}>
          <p>
            <a href='tel:1(619) 234-3908'>
              1(619) 234-3908 <span>CALL US TODAY!</span>
            </a>
          </p>
        </div>
        <i className='far fa-clock'></i>
        <div className={styles.info}>
          <p>
            Mon-Fri 8:30am - 5:00pm
            <span>Sat & Sun Closed</span>
          </p>
        </div>
        <div className={styles.consultBtn}>
          {router.pathname.includes('news') ? (
            <Link href='/#contact'>
              <li>Free Consultation</li>
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
              <li>Free Consultation</li>
            </ScrollLink>
          )}
        </div>
      </div>
      {/* Mobile Nav Toggle */}
      <div
        className={styles.mobile_nav_toggle}
        onClick={() => setMobileNav(!mobileNav)}
      >
        {mobileNav ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-plus'></i>
        )}
      </div>
      {/* Mobile Nav */}
      <div className={mobileNav ? styles.mobile_nav_active : styles.mobile_nav}>
        <h3>Menu</h3>
        <ul>
          <ScrollLink
            to='Home'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fas fa-home'></i>
              Home
            </li>
          </ScrollLink>

          <ScrollLink
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fas fa-info'></i>
              About
            </li>
          </ScrollLink>

          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fas fa-balance-scale-left'></i>
              Practice Areas
            </li>
          </ScrollLink>

          <ScrollLink
            to='attorneys'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fas fa-users'></i>
              Attorneys
            </li>
          </ScrollLink>

          <ScrollLink
            to='news'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fab fa-microblog'></i>
              News
            </li>
          </ScrollLink>

          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={30}
          >
            <li onClick={() => setMobileNav(!mobileNav)}>
              <i className='fas fa-paper-plane'></i>
              Contact
            </li>
          </ScrollLink>
        </ul>
      </div>
    </div>
  )
}

export default HeaderCenter
