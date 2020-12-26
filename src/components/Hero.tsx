import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: 'url("images/cityscape08.jpg")' }}
      id={styles.hero}
    >
      <div className={styles.overlay}></div>
      <div className={styles.hero_content}>
        <h2>Legal Insurance Defense</h2>
        <h1>
          Experienced insurance law{' '}
          <span>assistance in Southern California</span>
        </h1>
        <p>
          The <strong>Provan Law Firm</strong> is dedicated to providing clients
          with legal work of the highest caliber in a responsive, efficient
          manner. The firm's core values are{' '}
          <strong>
            client service, integrity, innovation, and excellence in practice
          </strong>
          , with a focus on experience, knowledge, and common sense.
        </p>
        <div className={styles.hero_btns}>
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            offset={-25}
            className={styles.hero_btn01}
          >
            Learn More
          </ScrollLink>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            offset={0}
            className={styles.hero_btn02}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
