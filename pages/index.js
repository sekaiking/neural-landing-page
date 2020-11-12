import Head from 'next/head'

import Hero from '../components/Hero'
import Test from '../components/Test'
import VideoText from '../components/VideoText'

const Home = () => (
  <div className="container">
    <Head>
      <title>neuronic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />
    <VideoText />
    <Test />
    <style jsx>{`
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
