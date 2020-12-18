import styled from 'styled-components'
const PracticeAreas = () => {
  return (
    <StyledPracticeAreas>
      <div className='info-card'>
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
      </div>

      <div className='areas'>
        <h3>Our Practice Areas</h3>
      </div>
    </StyledPracticeAreas>
  )
}

const StyledPracticeAreas = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .info-card {
    width: 70%;
    height: 30%;
    position: absolute;
    transform: translateY(-130%);
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 10;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 10px;
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
  }
  .areas {
    width: 100%;
    height: 70%;
    text-align: left;
    position: relative;
    transform: translateY(30%);
    padding: 0 210px;
    @media (max-width: 1130px) {
      padding: 0px 150px;
    }
    @media (max-width: 920px) {
      transform: translateY(0%);
      height: 100%;
      padding: 30px 75px;
    }
    @media (max-width: 500px) {
      padding: 50px 25px;
    }
    h3 {
      font-size: 2rem;
      color: #414141;
      border-bottom: 3px solid #c24343;
      padding: 10px 0;
      width: 350px;
    }
  }
`

export default PracticeAreas
