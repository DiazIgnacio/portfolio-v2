import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // add data-theme attribute to html element
  const theme = 'blue'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
