import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

const ExperienceBanner = () => {
  return (
    <StyledExperienceBanner
      style={{ backgroundImage: 'url("images/hands-xl.webp")' }}
    >
      <div className='overlay'></div>
      <div className='experience_content'>
        <h1>30 Years of Experience In Various Cases</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta omnis
          error ea sunt, delectus, rem accusantium veniam, aliquid odio eos eum
          ducimus ratione doloremque iste. Molestiae alias nisi maxime
          doloribus?
        </p>

        <ScrollLink
          to='services'
          spy={true}
          smooth={true}
          duration={600}
          exact='true'
          offset={-25}
          className='experience-btn'
        >
          Free Case Evaluation
        </ScrollLink>
      </div>
    </StyledExperienceBanner>
  )
}

const StyledExperienceBanner = styled.section`
  height: 50vh;
  /* margin: 100px 0; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -400px;
  position: relative;
  padding: 0 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1130px) {
    padding: 0 3rem;
    background-position: 0px 0px;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
    height: 84vh;
    background-position: 0px 0px;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(52, 87, 118, 0.708);
    z-index: 1;
  }
  .experience_content {
    height: 100%;
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h1 {
      font-size: 2.7rem;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 10px rgba(34, 54, 72, 0.523),
        0 0 6px rgba(34, 54, 72, 0.523);
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6rem;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }
    .experience-btn {
      border: 2px solid #c24343;
      padding: 12.5px 15px;
      background: #c24343;
      color: white;
      font-size: 0.9rem;
      border-radius: 2px;
      transition: all 0.1s ease-in-out;
      cursor: pointer;
      &:hover {
        border: 2px solid white;
        background: white;
        color: #c24343;
      }
    }
  }
`

export default ExperienceBanner
