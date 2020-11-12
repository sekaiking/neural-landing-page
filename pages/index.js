import Head from 'next/head'

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Test from '../components/Test'
import VideoText from '../components/VideoText'

const Home = () => (
  <div>
    <Head>
      <title>neuronic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <Hero />
    <VideoText />
    <Test />
    <style jsx>{`
    `}</style>

    <style jsx global>{`
    :root{
      --brand: #4ADB9B;
    }
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background: #010101;
        color: #fff;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      @media (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
      @media (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
      @media (min-width: 1460px) {
        .container {
          width: 1400px;
        }
      }
    `}</style>
  </div>
)

export default Home
