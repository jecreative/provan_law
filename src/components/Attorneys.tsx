import { useState } from 'react'

import styles from '../styles/Attorneys.module.css'

/**
 * 
 * Attorneys
  Mike Provan - Attorney
  mprovan@provanlaw.com

  Jane Provan - Office Manager
  jprovan@provanlaw.com

  Gretchen Esguerra - Legal Assistant
  gesguerra@provanlaw.com

  Christina Hernandez - Legal Secretary
  chernandez@provanlaw.com
 */

const Attorneys = () => {
  const [cardOverlay01, setCardOverlay01] = useState(false)
  const [cardOverlay02, setCardOverlay02] = useState(false)
  const [cardOverlay03, setCardOverlay03] = useState(false)
  const [cardOverlay04, setCardOverlay04] = useState(false)

  return (
    <section className={styles.attorneys} id='attorneys'>
      <div className={styles.attorneys_header}>
        <h1>Our Attorneys</h1>
        <hr />
      </div>
      <div className={styles.attorney_cards}>
        <div
          className={styles.attorney_card}
          onMouseEnter={() => setCardOverlay01(true)}
          onMouseLeave={() => setCardOverlay01(false)}
        >
          <div
            className={styles.attorney_card_top}
            // style={{ backgroundImage: 'url("images/lawyer01.jpg")' }}
            style={{
              backgroundImage:
                'url("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")',
            }}
          >
            <div
              className={
                cardOverlay01 === true ? styles.overlay_active : styles.overlay
              }
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>

          <div className={styles.attorney_card_bottom}>
            <h3>Mike Provan</h3>
            <p>Attorney</p>
          </div>
        </div>
        <div
          className={styles.attorney_card}
          onMouseEnter={() => setCardOverlay02(true)}
          onMouseLeave={() => setCardOverlay02(false)}
        >
          <div
            className={styles.attorney_card_top}
            // style={{ backgroundImage: 'url("images/lawyer02.jpg")' }}
            style={{
              backgroundImage:
                'url("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")',
            }}
          >
            <div
              className={
                cardOverlay02 === true ? styles.overlay_active : styles.overlay
              }
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>
          <div className={styles.attorney_card_bottom}>
            <h3>Jane Provan</h3>
            <p>Office Manager</p>
          </div>
        </div>

        <div
          className={styles.attorney_card}
          onMouseEnter={() => setCardOverlay03(true)}
          onMouseLeave={() => setCardOverlay03(false)}
        >
          <div
            className={styles.attorney_card_top}
            // style={{ backgroundImage: 'url("images/lawyer03.jpg")' }}
            style={{
              backgroundImage:
                'url("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")',
            }}
          >
            <div
              className={
                cardOverlay03 === true ? styles.overlay_active : styles.overlay
              }
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>

          <div className={styles.attorney_card_bottom}>
            <h3>Gretchen Esguerra</h3>
            <p>Legal Assistant</p>
          </div>
        </div>

        <div
          className={styles.attorney_card}
          onMouseEnter={() => setCardOverlay04(true)}
          onMouseLeave={() => setCardOverlay04(false)}
        >
          <div
            className={styles.attorney_card_top}
            // style={{ backgroundImage: 'url("/images/lawyer04.jpg")' }}
            style={{
              backgroundImage:
                'url("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")',
            }}
          >
            <div
              className={
                cardOverlay04 === true ? styles.overlay_active : styles.overlay
              }
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>
          <div className={styles.attorney_card_bottom}>
            <h3>Christina Hernandez</h3>
            <p>Legal Secretary</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Attorneys
