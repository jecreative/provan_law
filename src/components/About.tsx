import Image from 'next/image'

import styles from '../styles/About.module.css'
import InfoCard from '../components/InfoCard'

const About = () => {
  return (
    <>
      <InfoCard />
      <section id='about' className={styles.about}>
        <div className={styles.about_image}>
          <Image
            src='/images/buildings.svg'
            layout='fill'
            alt='Image of Downtown San Diego'
          />
        </div>
        <div className={styles.about_content}>
          <h1>About Us</h1>
          <hr />
          {/* <h2>Client Service, Integrity, Innovation</h2> */}
          <p>
            <strong>Provan Law</strong> is an innovative,{' '}
            <strong>full service civil litigation</strong> law firm. Our
            Attorneys have combined experience of over 30 years providing
            excellent service to our clients in the state and federal courts
            throughout California. We are a small firm that provides legal
            services with personal attention and competitive rates. Our success
            has come with offering a real alternative to the status quo of the
            legal community to clients who demand premium legal service and
            value.
            <br />
            <br />
            The attorneys at Provan Law practice in the areas of personal
            injury, contract law, and insurance litigation, including bad faith,
            premises liability, and risk management counseling. The firm
            represents individuals, and well as large and small businesses from
            across the United States. Our attorneys have excellent academic
            credentials and legal experience. We advise our clients how to best
            pursue their interests and avoid unnecessary costs and litigation.
            When litigation is unavoidable, the experienced attorneys at The
            Provan Clune Law Firm are experts at aggressively pursuing our
            clients' interests in mediation, arbitration and at trial.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
