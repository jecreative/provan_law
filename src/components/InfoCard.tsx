import styles from '../styles/InfoCard.module.css'

const InfoCard = () => {
  return (
    <div className={styles.info_container}>
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
    </div>
  )
}

export default InfoCard
