import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer_left'>
        <h3>Left</h3>
      </div>
      <div className='footer_middle'>
        <h3>Middle</h3>
      </div>
      <div className='footer_right'>
        <h3>Right</h3>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export default Footer
