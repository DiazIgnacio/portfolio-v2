import Layout from 'src/layouts/SpinnerLayout'
import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import ThemeProvider from 'src/contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
