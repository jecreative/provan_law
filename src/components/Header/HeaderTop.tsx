import styles from '../../styles/Header.module.css'

const HeaderTop = () => {
  return (
    <div className={styles.header_top}>
      <div className={styles.headerTop_left}>
        <i className='fas fa-map-marker-alt'></i>
        <p>8885 Rio San Diego Dr, Suite 367, 92108</p>
        <span>|</span>
        <i className='fas fa-envelope'></i>
        <p>
          <a href='mailto:mprovan@provanlaw.com'>mprovan@provanlaw.com</a>
        </p>
      </div>
      {/* <div className={styles.headerTop_right}>
        <p>Find us on social media</p>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-instagram'></i>
      </div> */}
    </div>
  )
}

export default HeaderTop
