import styles from '../styles/Status.module.css'

const StatusBanner = () => {
  return (
    <section className={styles.status}>
      <div className={styles.item}>
        <i className='fas fa-user-tie'></i>
        <h2>
          250+<span>Business Partners</span>
        </h2>
      </div>
      <div className={styles.item}>
        <i className='far fa-check-circle'></i>
        <h2>
          2500+<span>Cases Done</span>
        </h2>
      </div>
      <div className={styles.item}>
        <i className='fas fa-users'></i>
        <h2>
          8500+<span>Happy Clients</span>
        </h2>
      </div>
      <div className={styles.item}>
        <i className='fas fa-trophy'></i>
        <h2>
          1500+<span>Awards Won</span>
        </h2>
      </div>
    </section>
  )
}

export default StatusBanner
