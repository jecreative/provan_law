import { useRouter } from 'next/router'

import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderBottom from './HeaderBottom'
import styles from '../../styles/Header.module.css'

const Header: React.FC<{}> = () => {
  const router = useRouter()
  return (
    <header className={styles.header} id='header'>
      <HeaderTop />
      <HeaderCenter router={router} />
      <HeaderBottom router={router} />
    </header>
  )
}

export default Header
