import styled from 'styled-components'

const HeaderTop = () => {
  return (
    <StyledHeaderTop>
      <div className='headerTop_left'>
        <i className='fas fa-map-marker-alt'></i>
        <p>8885 Rio San Deigo Dr, Suite 367, 92108</p>
        <span>|</span>
        <i className='fas fa-envelope'></i>
        <p>
          <a href='mailto:mprovan@provanlaw.com'>mprovan@provanlaw.com</a>
        </p>
      </div>
      <div className='headerTop_right'>
        <p>Find us on social media</p>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-instagram'></i>
      </div>
    </StyledHeaderTop>
  )
}

const StyledHeaderTop = styled.div`
  height: 6vh;
  background-color: #2f4c65;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  letter-spacing: 0.02rem;
  font-size: 0.8rem;
  @media (max-width: 920px) {
    padding: 0 0.75rem;
    font-size: 0.8rem;
    letter-spacing: 0.01rem;
  }
  @media (max-width: 500px) {
    padding: 0 0.75rem;
    font-size: 0.57rem;
    letter-spacing: 0.01rem;
  }

  .headerTop_left {
    flex: 0.7;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    i {
      margin-right: 0.5rem;
    }
    span {
      margin: 0 1.5rem;
    }
    @media (max-width: 920px) {
      flex: 1;
      justify-content: center;
      span {
        margin: 0 0.5rem;
      }
    }
  }
  .headerTop_right {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    i {
      width: 25px;
      height: 25px;
      display: grid;
      place-items: center;
      margin: 0.5rem;
      border: solid white;
      border-width: thin;
      padding: 5px;
      border-radius: 100%;
      cursor: pointer;
      transition: 0.1s ease-in-out;
      &:hover {
        background: white;
        color: #2f4c65;
      }
    }
    @media (max-width: 920px) {
      display: none;
    }
  }
`

export default HeaderTop
