import styled from 'styled-components'

const StatusBanner = () => {
  return (
    <StatusSection>
      <div className='item'>
        <i className='fas fa-user-tie'></i>
        <h2>
          250+<span>Business Partners</span>
        </h2>
      </div>
      <div className='item'>
        <i className='far fa-check-circle'></i>
        <h2>
          2500+<span>Cases Done</span>
        </h2>
      </div>
      <div className='item'>
        <i className='fas fa-users'></i>
        <h2>
          8500+<span>Happy Clients</span>
        </h2>
      </div>
      <div className='item'>
        <i className='fas fa-trophy'></i>
        <h2>
          1500+<span>Awards Won</span>
        </h2>
      </div>
    </StatusSection>
  )
}

const StatusSection = styled.section`
  width: 100%;
  height: 40vh;
  background: #e5edf4;
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10rem;
  @media (max-width: 1024px) {
    padding: 0 7rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  @media (max-width: 660px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    height: 50vh;
    justify-content: space-evenly;
    padding: 0 6rem;
  }
  @media (max-width: 499px) {
    flex-wrap: wrap;
    height: 50vh;
    justify-content: space-evenly;
    padding: 0 6rem;
  }
  @media (max-width: 499px) {
    padding: 0 3rem;
  }
  .item {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      color: rgba(194, 67, 67, 0.865);
      font-size: 3.5rem;
      margin-bottom: 1rem;
      @media (max-width: 500px) {
        font-size: 2.5rem;
      }
    }
    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      color: #414141;
      line-height: 1.8rem;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }
    span {
      display: block;
      font-weight: 400;
      font-size: 1rem;
      color: #636363;
      text-align: center;
      letter-spacing: 0.02rem;
    }
  }
`

export default StatusBanner
