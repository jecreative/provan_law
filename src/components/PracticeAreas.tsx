import styles from '../styles/PracticeAreas.module.css'

const PracticeAreas = () => {
  return (
    <section className={styles.practice_areas}>
      <div className={styles.info_card}>
        <div className={styles.info_card_left}>
          <h3>
            <i className='fas fa-check-square'></i> Get Legal Advice
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
        <div className={styles.info_card_center}>
          <h3>
            <i className='fas fa-check-square'></i> Expert Lawyers
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
        <div className={styles.info_card_right}>
          <h3>
            <i className='fas fa-check-square'></i> Great Rates
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.services_header}>
          <h3>Our Practice Areas</h3>
          <hr />
        </div>

        <div className={styles.services_body}>
          <div className={styles.service_item}>
            <div className={styles.service_item_top}>
              <i className='fas fa-shield-alt'></i>
              <h3>Insurance Defense</h3>
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
              <h3>Car Accident</h3>
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
              <h3>Construction Accident</h3>
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
              <h3>Employment Law</h3>
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
              <h3>Home Owners Liability</h3>
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
              <h3>Product Damage</h3>
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
