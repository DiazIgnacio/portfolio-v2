import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Projects,
  Skills,
  Statistics,
  About,
  Hero,
  Footer
} from 'src/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ignacio Diaz | Front End Developer | Software Engineer</title>
        <meta
          name="description"
          content="Hi! I'm Ignacio Diaz, a Frontend Web Developer based in Argentina. I
          have a passion for all things web, and love working on interactive and
          responsive websites. In my free time, I like to read and spend time
          with my family and friends."
        />
        <link rel="icon" href="/logo-no-background.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Birthstone&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Hero />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Statistics id="statistics" />
      </main>

      <Footer id="statistics" />
    </>
  )
}

export default Home
