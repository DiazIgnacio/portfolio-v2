import Container from '../Container'

import Circles from './Circles'
import Divider from './Divider'
import SocialIcons from './SocialIcons'

const About = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Container {...props}>
      <div className="text-center">
        <h2
          className="text-5xl font-bold leading-10 text-primary"
          data-aos="zoom-in-up"
        >
          About Me
        </h2>
        <p
          className="mx-auto mt-5 max-w-[400px] text-lg leading-5 text-grey"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Here I show some of my main skills among a little of personal data
          about myself
        </p>
      </div>

      <div className="mt-20 flex flex-col flex-wrap items-center md:flex-row md:items-start md:justify-between">
        <div
          className="relative w-3/4 text-center md:w-1/3"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <Circles />
        </div>
        <div
          className="mx-auto mt-12 w-11/12 space-y-4 text-base font-normal
           leading-8 text-black md:mt-0 md:w-3/5 lg:text-lg xl:text-xl"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <p>
            Hello! I'm Ignacio Diaz, a passionate Frontend Web Developer based
            in Argentina. My love for all things web has led me to specialize in
            creating interactive and responsive websites. In my free time, I
            enjoy reading and spending quality time with my family and friends.
          </p>
          <p>
            I hold a degree in Electronics from the University of Rosario, and I
            have 5+ years of experience as a software developer. Throughout my
            career, I have worked with a diverse range of programming languages
            and frameworks.
          </p>
        </div>
        <div
          className="mx-auto mt-12 w-11/12 space-y-4 text-base font-normal
           leading-8 text-black lg:text-lg xl:text-xl"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <p>
            My main goal is to create visually appealing, functional, and
            user-friendly websites that leave a lasting impression on users. I
            take pride in my work, and I am constantly looking for innovative
            ways to improve my skills and stay ahead of industry trends.
          </p>
          <p>
            As a hard worker, I am committed to meeting deadlines and delivering
            high-quality work. I am eager to collaborate with you and explore
            what we can achieve together. So, let's get started and create
            something amazing!
          </p>
          <Divider />
          <SocialIcons />
        </div>
      </div>
    </Container>
  )
}

export default About
