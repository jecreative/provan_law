import { FormspreeProvider } from '@formspree/react'

import '../styles/styles.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project='1574127766335389437'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </FormspreeProvider>
  )
}

export default MyApp
