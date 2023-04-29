import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import ThemeProvider from 'src/contexts/ThemeContext'
import Layout from 'src/layouts/SpinnerLayout'

import AOS from 'aos'

import 'aos/dist/aos.css'
import '../styles/globals.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 10
    })
  }, [])
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
