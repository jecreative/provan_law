import styles from '../styles/PracticeAreas.module.css'
import InfoCard from '../components/InfoCard'

const PracticeAreas = () => {
  return (
    <section className={styles.practice_areas} id='services'>
      {/* <InfoCard /> */}
      <div className={styles.services}>
        <div className={styles.services_header}>
          <h1>Our Practice Areas</h1>
          <hr />
        </div>

        <div className={styles.services_body}>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-shield-alt'></i>
              <h3>Personal Injury</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-car-crash'></i>
              <h3>Business Litigation</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-hard-hat'></i>
              <h3>Contract Law</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-gavel'></i>
              <h3>Insurance Litigation</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-house-user'></i>
              <h3>Premises Liability</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-parachute-box'></i>
              <h3>Risk Managment</h3>
            </div>
            <div className={styles.service_item_bottom}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
