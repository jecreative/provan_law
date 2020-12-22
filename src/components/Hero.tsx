import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: 'url("images/hero_bg.webp")' }}
      id={styles.hero}
    >
      <div className={styles.overlay}></div>
      <div className={styles.hero_content}>
        <h2>Legal Insurance Defense</h2>
        <h1>
          Experienced insurance law{' '}
          <span>assistance in Southern California</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          <span> nulla magnam animi porro sit? Rem?</span>
        </p>
        <div className={styles.hero_btns}>
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
            className={styles.hero_btn01}
          >
            Our Service
          </ScrollLink>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
            className={styles.hero_btn02}
          >
            Contact Us Now
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}

// const StyledHero = styled.div`
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   height: 600px;
//   position: relative;
//   padding: 0 15rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 1130px) {
//     padding: 0 5rem;
//   }
//   @media (max-width: 500px) {
//     padding: 0 1rem;
//     height: 84vh;
//   }
//   .overlay {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     background-color: rgba(34, 54, 72, 0.523);
//     z-index: 1;
//   }
//   .hero_content {
//     height: 100%;
//     width: 100%;
//     z-index: 2;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: white;
//     h2 {
//       font-size: 1rem;
//       letter-spacing: 0.05rem;
//       font-weight: 500;
//       width: 250px;
//       text-align: center;
//       padding: 10px;
//       margin-bottom: 1rem;
//       border-radius: 2px;
//       background: rgba(184, 184, 184, 0.797);
//       text-shadow: 0 0 10px rgba(34, 54, 72, 0.523),
//         0 0 6px rgba(34, 54, 72, 0.523);
//     }
//     span {
//       display: block;
//       @media (max-width: 1130px) {
//         display: initial;
//       }
//     }
//     h1 {
//       font-size: 2.7rem;
//       margin-bottom: 1.5rem;
//       text-shadow: 0 0 10px rgba(34, 54, 72, 0.523),
//         0 0 6px rgba(34, 54, 72, 0.523);
//     }
//     p {
//       font-size: 1.1rem;
//       line-height: 1.6rem;
//       margin-bottom: 1.5rem;
//       font-weight: 300;
//     }
//     .hero-btns {
//       height: 7vh;
//       display: flex;
//       align-items: center;
//       .hero-btn01 {
//         border: 2px solid #c24343;
//         padding: 12.5px 15px;
//         margin-right: 2.5rem;
//         background: #c24343;
//         color: white;
//         font-size: 0.9rem;
//         border-radius: 2px;
//         transition: all 0.1s ease-in-out;
//         cursor: pointer;
//         &:hover {
//           border: 2px solid white;
//           background: white;
//           color: #c24343;
//         }
//       }
//       .hero-btn02 {
//         border: 2px solid white;
//         padding: 12.5px 15px;
//         margin-right: 2.5rem;
//         background: white;
//         color: #c24343;
//         font-size: 0.9rem;
//         border-radius: 2px;
//         transition: all 0.1s ease-in-out;
//         cursor: pointer;
//         &:hover {
//           border: 2px solid #c24343;
//           background: #c24343;
//           color: white;
//         }
//       }
//     }
//   }
// `

export default Hero
