import '../styles/styles.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
