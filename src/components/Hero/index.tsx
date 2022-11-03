import Link from 'next/link'

import LinkedinLogo from '../Logos/Linkedin'
import GithubLogo from '../Logos/Github'
import EmailLogo from '../Logos/Email'
import PhoneLogo from '../Logos/Phone'

const Hero = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      <Infobar />
      <Navbar />
      <div className="mx-32 mt-20 w-4/5 max-w-[660px]">
        <h2 className="text-3xl font-normal leading-9">I'm Ignacio</h2>
        <h1 className="mt-1 text-6xl font-semibold leading-[70px] text-primary">
          Front End Developer
        </h1>
        <p className="mt-5 text-xl leading-8">
          Hi! I'm Ignacio Diaz, a Frontend Web Developer based in Argentina. I
          have a passion for all things web, and love working on interactive and
          responsive websites. In my free time, I like to read and spend time
          with my family and friends.
        </p>
        <button className="relative z-20 mt-10 cursor-pointer rounded-2xl bg-gradient-to-t px-12 py-5 text-2xl font-medium leading-6">
          Portfolio
        </button>
      </div>
      <Waves />
    </div>
  )
}

const Infobar = () => (
  <div className="flex h-10 w-screen items-center justify-around bg-primary">
    <div className="flex">
      <span className="mr-7 flex items-center text-sm font-normal leading-10">
        <EmailLogo className="mr-4" />
        diaz.ignacio023@gmail.com
      </span>
      <span className="flex items-center text-sm font-normal leading-10">
        <PhoneLogo className="mr-4" />
        +54 9 341 696 2877
      </span>
    </div>
    <div className="flex items-center">
      <a
        href="https://github.com/DiazIgnacio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo className="mr-11 cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/diaz-ignacio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo className="cursor-pointer" />
      </a>
    </div>
  </div>
)

const Navbar = () => (
  <nav className="flex justify-between px-32 pt-6">
    <Link href="/">
      <div>
        <span className="font-logo-first-letter text-5xl uppercase leading-10">
          I
        </span>
        <span className="font-logo text-5xl uppercase leading-10">gnacio</span>
      </div>
    </Link>
    <ul className="flex justify-end text-2xl font-normal leading-8">
      <Link href="#about">
        <li className="mr-10 cursor-pointer">About</li>
      </Link>
      <Link href="#projects">
        <li className="mr-10 cursor-pointer">Projects</li>
      </Link>
      <Link href="#contact">
        <li className="cursor-pointer">Contact</li>
      </Link>
    </ul>
  </nav>
)

const Waves = () => (
  <>
    <img
      src="/images/wave-blurred.svg"
      alt="wave"
      className="absolute bottom-8"
    />
    <img
      src="/images/wave-front.svg"
      alt="wave"
      className="absolute bottom-0 z-10"
    />
  </>
)

export default Hero
