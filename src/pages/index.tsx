import Head from 'next/head'
import styled from 'styled-components'

import Hero from '../components/Hero'
import PracticeAreas from '../components/PracticeAreas'

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Provan Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Hero />
      <PracticeAreas />
    </>
  )
}

export default Home
