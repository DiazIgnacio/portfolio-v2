import Container from '../Container'

import Circles from './Circles'
import Divider from './Divider'
import SocialIcons from './SocialIcons'

const About = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Container {...props}>
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-10 text-primary">About Me</h2>
        <p className="mx-auto mt-5 max-w-[400px] text-lg leading-5 text-grey">
          Here I show some of my main skills among a little of personal data
          about myself
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="relative w-3/4 text-center lg:w-1/3">
          <Circles />
        </div>
        <div className="mx-auto mt-12 w-11/12 text-base font-normal leading-8 text-black lg:mt-0 lg:w-3/5 lg:text-lg xl:text-xl">
          <p>
            Hi! I'm Ignacio Diaz, a Frontend Web Developer based in Argentina. I
            have a passion for all things web, and love working on interactive
            and responsive websites. In my free time, I like to read and spend
            time with my family and friends. I have a degree in Electronics from
            the University of Rosario, and have been working as a web developer
            for over 2 years.
          </p>
          <p className="mt-5">
            My goal is to create beautiful, functional, and user-friendly
            websites that are both visually appealing and easy to use. I am a
            hard worker and take pride in my work, and I am always looking for
            new and innovative ways to improve my skills. I am excited to start
            working with you and see what we can create together!
          </p>
          <Divider />
          <SocialIcons />
        </div>
      </div>
    </Container>
  )
}

export default About
