import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import ThemeProvider from 'src/contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
