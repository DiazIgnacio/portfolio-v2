import Container from '../Container'
import Github from '../Logos/Github'
import Linkedin from '../Logos/Linkedin'

const About = () => {
  return (
    <Container>
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

const Circles = () => (
  <div className="relative top-0 left-0 mx-auto aspect-square w-10/12 lg:mx-0 lg:w-11/12">
    <div className="absolute top-0 left-0 aspect-square w-full rounded-full bg-primary-dark"></div>
    <div className="absolute top-1/2 -right-2 z-10 aspect-square w-11/12 -translate-y-1/2 rounded-full bg-primary">
      <div className="absolute bottom-0 left-2 aspect-square w-[87%] overflow-hidden rounded-full bg-primary-dark">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFeJZJ0VQ3Qbg/profile-displayphoto-shrink_800_800/0/1641076824457?e=1672876800&v=beta&t=s_hbPfHemwmkqt8BqA7Z7EKLgNjuRbTCljB5dgDgLTk"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
)

const Divider = () => (
  <span className="mt-12 block h-1 w-1/3 bg-gradient-to-r"></span>
)

const SocialIcons = () => (
  <div className="mt-10 flex items-center">
    <a
      href="https://www.linkedin.com/in/diaz-ignacio/"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-10"
    >
      <Linkedin color="#151419" />
    </a>
    <a
      href="https://github.com/DiazIgnacio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github color="#151419" />
    </a>
  </div>
)

export default About
