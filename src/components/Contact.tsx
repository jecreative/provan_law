import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [practiceArea, setPracticeArea] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section className={styles.contact} id='contact'>
      <div
        className={styles.contact_left}
        style={{ backgroundImage: 'url("images/contact_bg.webp")' }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.contact_left_content}>
          <Link href='/'>
            <a>
              <Image
                src='/provan_law_white.svg'
                alt='logo'
                width='100%'
                height='100%'
              />
            </a>
          </Link>
          <h2>Free Call Us</h2>
          <p>If you would like to speak to someone directly</p>
          <a className={styles.phone} href='tel:6192343908'>
            <i className='fas fa-mobile-alt'></i> 619.234.3908
          </a>
        </div>
      </div>
      <div className={styles.contact_right}>
        <h3>Free Consultation</h3>
        <form>
          <div className={styles.form_group}>
            <label htmlFor='name'></label>
            <input
              className={styles.name}
              type='text'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='phone'></label>
            <input
              id='phone'
              type='number'
              value={phone}
              placeholder='Phone'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.form_group} id='practice-area'>
            <label htmlFor='practice-area'></label>
            <input
              id='practice-areas'
              type='text'
              value={practiceArea}
              placeholder='Practice Area'
              onChange={(e) => setPracticeArea(e.target.value)}
            />
          </div>
          <div className={styles.form_group} id='message'>
            <label htmlFor='message'></label>
            <textarea
              id='message'
              value={message}
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
