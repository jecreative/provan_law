import { useState } from 'react'
import styled from 'styled-components'

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
    <StyledAttorneys id='attorneys'>
      <div className='attorneys-header'>
        <h1>Our Attorneys</h1>
        <hr />
      </div>
      <div className='attorney-cards'>
        <div
          className='attorney-card'
          onMouseEnter={() => setCardOverlay01(true)}
          onMouseLeave={() => setCardOverlay01(false)}
        >
          <div
            className='attorney-card-top'
            style={{ backgroundImage: 'url("images/person03-sm.webp")' }}
          >
            <div
              className={cardOverlay01 === true ? 'overlay active' : 'overlay'}
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>

          <div className='attorney-card-bottom'>
            <h3>John Doe</h3>
            <p>Attorney</p>
          </div>
        </div>
        <div
          className='attorney-card'
          onMouseEnter={() => setCardOverlay02(true)}
          onMouseLeave={() => setCardOverlay02(false)}
        >
          <div
            className='attorney-card-top'
            style={{ backgroundImage: 'url("images/person01-sm.webp")' }}
          >
            <div
              className={cardOverlay02 === true ? 'overlay active' : 'overlay'}
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>
          <div className='attorney-card-bottom'>
            <h3>Jane Doe</h3>
            <p>Legal Secretary</p>
          </div>
        </div>

        <div
          className='attorney-card'
          onMouseEnter={() => setCardOverlay03(true)}
          onMouseLeave={() => setCardOverlay03(false)}
        >
          <div
            className='attorney-card-top'
            style={{ backgroundImage: 'url("images/person02-sm.webp")' }}
          >
            <div
              className={cardOverlay03 === true ? 'overlay active' : 'overlay'}
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>

          <div className='attorney-card-bottom'>
            <h3>Sam Smith</h3>
            <p>Office Manager</p>
          </div>
        </div>

        <div
          className='attorney-card'
          onMouseEnter={() => setCardOverlay04(true)}
          onMouseLeave={() => setCardOverlay04(false)}
        >
          <div
            className='attorney-card-top'
            style={{ backgroundImage: 'url("images/person04-sm.webp")' }}
          >
            <div
              className={cardOverlay04 === true ? 'overlay active' : 'overlay'}
            >
              <a href='mailto:' target='_blank'>
                <i className='fas fa-envelope'></i>
              </a>
              <a href='https://www.facebook.com/' target='_blank'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>
          <div className='attorney-card-bottom'>
            <h3>Rick Sanchez</h3>
            <p>Legal Assistant</p>
          </div>
        </div>
      </div>
    </StyledAttorneys>
  )
}

const StyledAttorneys = styled.section`
  height: 100%;
  width: 100%;
  padding: 5rem 10rem;
  @media (max-width: 1130px) {
    padding: 2rem 8rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  .attorneys-header {
    margin-top: 2rem;
    margin-bottom: 4rem;

    h1 {
      font-size: 2rem;
      color: #414141;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 5px rgba(58, 58, 58, 0.1), 0 0 2px rgba(58, 58, 58, 0.1);
    }
    hr {
      width: 125px;
      border: none;
      background: #c24343;
      height: 2px;
    }
    @media (max-width: 768px) {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      /* padding-left: 3rem; */
      h1 {
        font-size: 1.6rem;
        color: #414141;
        margin-bottom: 0.5rem;
        text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
          0 0 2px rgba(58, 58, 58, 0.1);
      }
      hr {
        width: 150px;
        border: none;
        background: #c24343;
        height: 2px;
      }
    }
  }

  .attorney-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width: 1130px) {
      justify-content: space-evenly;
    }
    @media (max-width: 500px) {
      padding: 0 1rem;
    }

    .attorney-card {
      width: 260px;
      height: 335px;
      box-shadow: 0 0 30px rgba(58, 58, 58, 0.2), 0 0 20px rgba(58, 58, 58, 0.1);

      @media (max-width: 768px) {
        width: 300px;
        height: 375px;
      }
      @media (max-width: 768px) {
        width: 300px;
        height: 375px;
        margin-bottom: 1rem;
      }
      .attorney-card-top {
        width: 100%;
        height: 75%;
        background-size: cover;
        background-position: top center;
        position: relative;
      }
      .overlay {
        opacity: 0%;
      }
      .overlay.active {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 100%;
        background: rgba(194, 67, 67, 0.653);
        transition: all 0.1s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          margin: 0 1rem;
          background: rgb(194, 67, 67);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          &:hover {
            opacity: 70%;
          }
        }
      }
      .attorney-card-bottom {
        width: 100%;
        height: 25%;
        background-size: cover;

        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          font-size: 1.4rem;
          font-weight: 500;
          color: #353535;
          letter-spacing: 0.01rem;
          text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
            0 0 2px rgba(58, 58, 58, 0.1);
        }
        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: #636363;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
            0 0 2px rgba(58, 58, 58, 0.1);
        }
      }
    }
  }
`

export default Attorneys
