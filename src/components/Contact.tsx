import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [practiceArea, setPracticeArea] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ContactSection id='contact'>
      <div
        className='contact_left'
        style={{ backgroundImage: 'url("images/contact-sm.webp")' }}
      >
        <div className='overlay'></div>
        <div className='contact_left_content'>
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
          <a className='phone' href='tel:6192343908'>
            <i className='fas fa-mobile-alt'></i> 619.234.3908
          </a>
        </div>
      </div>
      <div className='contact_right'>
        <h3>Free Consultation</h3>
        <form>
          <div className='form_group'>
            <label htmlFor='name'></label>
            <input
              id='name'
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

          <div className='form_group' id='practice-area'>
            <label htmlFor='practice-area'></label>
            <input
              id='practice-areas'
              type='text'
              value={practiceArea}
              placeholder='Practice Area'
              onChange={(e) => setPracticeArea(e.target.value)}
            />
          </div>
          <div className='form_group' id='message'>
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
    </ContactSection>
  )
}

const ContactSection = styled.section`
  height: 100%;
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .contact_left {
    position: relative;
    flex-basis: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: rgba(36, 78, 114, 0.769);
      z-index: 1;
    }
    .contact_left_content {
      z-index: 100;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      padding: 5rem 7.5rem;
      color: white;
      @media (max-width: 1200px) {
        padding: 5rem 5rem;
      }
      @media (max-width: 1000px) {
        padding: 5rem 3rem;
      }
      img {
        width: 400px;
        height: 100px;
        opacity: 80%;
        &:hover {
          opacity: 50%;
        }
      }
      h2 {
        font-weight: 400;
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }
      p {
        font-weight: 400;
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
      }
      .phone {
        font-weight: 300;
        font-size: 2.5rem;
        color: #fff1f1;
        &:hover {
          opacity: 50%;
        }
        i {
          font-size: 2.2rem;
        }
      }
    }
  }
  .contact_right {
    background: #e4edf3;
    flex-basis: 50%;
    height: 100%;
    padding: 5rem 7.5rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
      padding: 5rem 5rem;
    }
    @media (max-width: 1000px) {
      padding: 5rem 3rem;
    }
    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: #414141;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 5px rgba(58, 58, 58, 0.1), 0 0 2px rgba(58, 58, 58, 0.1);
    }
    form {
      display: flex;
      flex-direction: column;
      #name {
        margin-right: 1rem;
      }
      .form_group {
        display: flex;
        input,
        textarea {
          width: 100%;
          margin-bottom: 1.25rem;
          min-height: 5vh;
          outline: none;
          border: none;
          padding: 10px;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
        }
        textarea {
          min-height: 15vh;
        }
      }
      button {
        border: 2px solid #c24343;
        padding: 12.5px 15px;
        background: #c24343;
        color: white;
        font-size: 0.9rem;
        border-radius: 2px;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        width: 200px;
        &:hover {
          border: 2px solid #c24343;
          background: transparent;
          color: #c24343;
        }
      }
    }
  }
`

export default Contact
