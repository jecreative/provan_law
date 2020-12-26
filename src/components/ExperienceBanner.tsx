import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/ExperienceBanner.module.css'

const ExperienceBanner = () => {
  return (
    <section
      className={styles.experience_banner}
      style={{ backgroundImage: 'url("images/experience_banner.jpg")' }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.experience_content}>
        <h1>
          30 Years of Experience In State and Federal Courts Throughout
          California
        </h1>

        <p>
          Innovative, full service civil litigation law firm. We are a small
          firm that provides legal services with personal attention and
          competitive rates. Our success has come with offering a real
          alternative to the status quo of the legal community to clients who
          demand premium legal service and value.
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
