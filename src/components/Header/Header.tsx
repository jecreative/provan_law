import styled from 'styled-components'
import { useRouter } from 'next/router'

import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderBottom from './HeaderBottom'

const Header: React.FC<{}> = () => {
  const router = useRouter()
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderCenter router={router} />
      <HeaderBottom router={router} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Header
