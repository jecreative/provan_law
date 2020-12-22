import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/ExperienceBanner.module.css'

const ExperienceBanner = () => {
  return (
    <section
      className={styles.experience_banner}
      style={{ backgroundImage: 'url("images/experience_banner.webp")' }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.experience_content}>
        <h1>30 Years of Experience In Various Cases</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta omnis
          error ea sunt, delectus, rem accusantium veniam, aliquid odio eos eum
          ducimus ratione doloremque iste. Molestiae alias nisi maxime
          doloribus?
        </p>

        <ScrollLink
          to='contact'
          spy={true}
          smooth={true}
          duration={600}
          offset={0}
          className={styles.experience_btn}
        >
          Free Case Evaluation
        </ScrollLink>
      </div>
    </section>
  )
}

export default ExperienceBanner
