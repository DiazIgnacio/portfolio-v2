import Link from 'next/link'

import { useTheme } from 'src/contexts/ThemeContext'

const Navbar = () => (
  <nav className="px-auto flex items-center justify-between px-8 pt-6 md:px-10 lg:px-32">
    <Link href="/">
      <div className="cursor-pointer text-4xl uppercase leading-10 md:text-5xl">
        <span className="font-logo-first-letter">I</span>
        <span className="font-logo">gnacio</span>
      </div>
    </Link>
    <ul className="hidden items-center justify-end text-2xl font-normal leading-8 md:flex">
      <Link href="#about">
        <li className="mr-10 cursor-pointer">About</li>
      </Link>
      <Link href="#projects">
        <li className="mr-10 cursor-pointer">Projects</li>
      </Link>
      <Link href="#contact">
        <li className="cursor-pointer">Contact</li>
      </Link>
      <ChangeThemeIcon />
    </ul>
    <div className="space-y-2 md:hidden">
      <div className="h-0.5 w-8 rounded-lg bg-white"></div>
      <div className="h-0.5 w-8 rounded-lg bg-white"></div>
      <div className="h-0.5 w-8 rounded-lg bg-white"></div>
    </div>
  </nav>
)

const ChangeThemeIcon = () => {
  const { changeTheme } = useTheme()
  return (
    <button className="ml-10" onClick={changeTheme}>
      <div className="h-4 w-4 rounded-full bg-primary" />
    </button>
  )
}

export default Navbar
