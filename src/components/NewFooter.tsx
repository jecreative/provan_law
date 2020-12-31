import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/NewFooter.module.css'

const NewFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <h1>Provan Law</h1>
      </div>

      <nav className={styles.footer_center}>
        <ul>
          <ScrollLink
            to='header'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            activeClass='false'
          >
            <li>HOME</li>
          </ScrollLink>
          <ScrollLink
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            activeClass='false'
          >
            <li>ABOUT US</li>
          </ScrollLink>
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            activeClass='false'
          >
            <li>PRACTICES AREAS</li>
          </ScrollLink>
          <ScrollLink
            to='attorneys'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            activeClass='false'
          >
            <li>ATTORNEYS</li>
          </ScrollLink>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            activeClass='false'
          >
            <li>CONTACT</li>
          </ScrollLink>
        </ul>
      </nav>

      <div className={styles.footer_right}>
        <i className='fas fa-mobile-alt'></i>
        <p>
          <a href='tel:1(619) 234-3908'>1(619) 234-3908</a>
        </p>
        <i className='fas fa-envelope'></i>
        <p>
          <a href='mailto:mprovan@provanlaw.com'>mprovan@provanlaw.com</a>
        </p>
      </div>
    </footer>
  )
}

export default NewFooter
