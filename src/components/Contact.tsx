import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'

import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [status, setStatus] = useState<Object>({})

  const [state, handleSubmit] = useForm('contact')

  return (
    <section className={styles.contact} id='contact'>
      <div
        className={styles.contact_left}
        style={{ backgroundImage: 'url("images/contact_bg.jpg")' }}
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
        <h3>Contact Us</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor='name'></label>
            <input
              className={styles.name}
              id='name'
              type='text'
              name='name'
              required
              placeholder='Name'
            />
            <label htmlFor='phone'></label>
            <input
              id='phone'
              type='text'
              name='phone'
              required
              placeholder='Phone'
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor='email'></label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor='message'></label>
            <textarea
              id='message'
              placeholder='Message'
              name='message'
              required
            ></textarea>
          </div>
          {state.succeeded ? (
            <p style={{ fontSize: '1.2rem' }}>
              Thank you for your interest!
              <span style={{ display: 'block', marginTop: '.5rem' }}>
                Will be in touch within the next 48 hours.
              </span>
            </p>
          ) : (
            <button disabled={state.submitting} type='submit'>
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
