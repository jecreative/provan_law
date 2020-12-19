import styled from 'styled-components'
const PracticeAreas = () => {
  return (
    <StyledPracticeAreas>
      <InfoCard id='info_card'>
        <div className='infoCard-left'>
          <h3>
            <i className='fas fa-check-square'></i> Get Legal Advice
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
        <div className='infoCard-center'>
          <h3>
            <i className='fas fa-check-square'></i> Expert Lawyers
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
        <div className='infoCard-right'>
          <h3>
            <i className='fas fa-check-square'></i> Great Rates
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
            cumque accusamus tempore rem suscipit?
          </p>
        </div>
      </InfoCard>

      <Services id='services'>
        <div className='services-header'>
          <h3>Our Practice Areas</h3>
          <hr />
        </div>

        <div className='services-body'>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-shield-alt'></i>
              <h3>Insurance Defense</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-car-crash'></i>
              <h3>Car Accident</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-hard-hat'></i>
              <h3>Construction Accident</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-gavel'></i>
              <h3>Employment Law</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-house-user'></i>
              <h3>Home Owners Liability</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
          <div className='service-item'>
            <div className='service-item-top'>
              <i className='fas fa-parachute-box'></i>
              <h3>Product Damage</h3>
            </div>
            <div className='service-item-bottom'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                id placeat, facere repudiandae soluta consectetur!
              </p>
            </div>
          </div>
        </div>
      </Services>
    </StyledPracticeAreas>
  )
}

const StyledPracticeAreas = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 13.25rem;
  height: 100%;
  margin-bottom: 200px;
  @media (max-width: 1130px) {
    padding: 0 3.75rem;
    height: 100%;
  }
  @media (max-width: 920px) {
    padding: 0 3.75rem;
    height: 60%;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`

const InfoCard = styled.div`
  width: 70%;
  height: 40%;
  position: absolute;
  transform: translateY(-95%);
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 10px;
  @media (max-width: 1130px) {
    height: 40%;

    transform: translateY(-100%);
  }
  @media (max-width: 920px) {
    display: none;
  }
  i {
    color: #c24343;
    margin-right: 0.5rem;
  }
  h3 {
    color: #414141;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  p {
    color: #505050;
    font-size: 0.9rem;
  }
  .infoCard-left {
    border-right: 1px solid #9f9f9f;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .infoCard-center {
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .infoCard-right {
    border-left: 1px solid #9f9f9f;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`

const Services = styled.div`
  width: 100%;
  height: 70%;
  text-align: left;
  position: relative;
  transform: translateY(35%);

  @media (max-width: 920px) {
    transform: translateY(10%);
    height: 100%;
    padding: 0 1.5rem;
  }
  @media (min-width: 700px) {
    .services-header {
      margin-top: 2rem;
      margin-bottom: 4rem;
      h3 {
        font-size: 2rem;
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
    .services-body {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));

      grid-column-gap: 1.5rem;
      width: 100%;
      .service-item {
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* justify-content: space-between; */
        margin-bottom: 1.75rem;
        border-radius: 10px;
        /* box-shadow: 0 0 15px rgba(58, 58, 58, 0.1),
          0 0 10px rgba(58, 58, 58, 0.1); */
        overflow: hidden;
        .service-item-top {
          width: 100%;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          /* justify-content: flex-start; */
          /* height: 100%; */
          /* padding: 1rem; */
          margin-bottom: 1rem;
          i {
            font-size: 1.5rem;
            border-radius: 5px;
            border: 1px solid #c24343;
            padding: 10px;
            color: #c24343;
            margin-right: 0.5rem;
          }
          h3 {
            margin-bottom: 0.3rem;
            color: #414141;
            text-transform: uppercase;
            font-size: 1.15rem;
          }
        }
        .service-item-bottom {
          width: 100%;
          /* height: 100%; */
          /* background: #dfe1e4; */
          padding: 0 1rem; /* Added 0 for padding top & bottom */
          display: flex;
          align-items: center;
          /* justify-content: center; */
          p {
            color: #282828;
            font-size: 0.85rem;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    transform: translateY(0%);
    height: 100%;
    padding: 1.5rem;
    padding-top: 2rem;
    .services-header {
      margin: 2rem 0;
      h3 {
        font-size: 1.4rem;
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
    .services-body {
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;
      .service-item {
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-between; */
        margin-bottom: 0.2rem;
        border-radius: 5px;
        /* box-shadow: 0 0 15px rgba(58, 58, 58, 0.3), 0 0 10px rgba(0, 0, 0, 0.1); */
        overflow: hidden;
        .service-item-top {
          width: 100%;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          /* justify-content: flex-start; */
          /* height: 100%; */
          padding: 0.5rem 1rem;
          i {
            font-size: 1.5rem;
            border-radius: 5px;
            border: 1px solid #939393;
            padding: 10px;
            color: #c24343;
            margin-right: 0.5rem;
          }
          h3 {
            margin-bottom: 0.3rem;
            color: #414141;
            text-transform: uppercase;
            font-size: 1.25rem;
            text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
              0 0 2px rgba(58, 58, 58, 0.1);
          }
        }
        .service-item-bottom {
          width: 100%;
          /* height: 100%; */
          /* background: #dfe1e4; */
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            color: #282828;
            font-size: 0.85rem;
            width: 100%;
            text-shadow: 0 0 5px rgba(58, 58, 58, 0.1),
              0 0 2px rgba(58, 58, 58, 0.1);
          }
        }
      }
    }
  }
`

export default PracticeAreas
