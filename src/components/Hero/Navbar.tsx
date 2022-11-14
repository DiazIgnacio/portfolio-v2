import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => (
  <nav className="flex justify-between px-32 pt-6">
    <Link href="/">
      <div className="cursor-pointer">
        <span className="font-logo-first-letter text-5xl uppercase leading-10">
          I
        </span>
        <span className="font-logo text-5xl uppercase leading-10">gnacio</span>
      </div>
    </Link>
    <ul className="flex items-center justify-end text-2xl font-normal leading-8">
      <Link href="#about">
        <li className="mr-10 cursor-pointer">About</li>
      </Link>
      <Link href="#projects">
        <li className="mr-10 cursor-pointer">Projects</li>
      </Link>
      <Link href="#contact">
        <li className="cursor-pointer">Contact</li>
      </Link>
      <ChangeTheme />
    </ul>
  </nav>
)

const ChangeTheme = () => {
  const [theme, setTheme] = useState('blue')
  const changeTheme = () => {
    if (theme === 'blue') {
      document.documentElement.setAttribute('data-theme', 'green')
      setTheme('green')
    } else if (theme === 'green') {
      document.documentElement.setAttribute('data-theme', 'red')
      setTheme('red')
    } else {
      document.documentElement.setAttribute('data-theme', 'blue')
      setTheme('blue')
    }
  }

  return (
    <button className="ml-10" onClick={changeTheme}>
      <div className="h-4 w-4 rounded-full bg-primary" />
    </button>
  )
}

export default Navbar
