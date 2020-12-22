import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='footer_left'>
        <h3>Left</h3>
      </div>
      <div className='footer_middle'>
        <h3>Middle</h3>
      </div>
      <div className='footer_right'>
        <h3>Right</h3>
      </div>
    </footer>
  )
}

export default Footer
