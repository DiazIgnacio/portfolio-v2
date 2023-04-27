import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useTheme } from 'src/contexts/ThemeContext'
import Logo from '../Logo'

import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 45) {
        !isScrolled && setIsScrolled(true)
      } else {
        isScrolled && setIsScrolled(false)
      }
    }

    document.body.addEventListener('scroll', handleScroll)
    return () => document.body.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  const closeMenu = () => setIsOpen(false)
  const openMenu = () => setIsOpen(true)

  return (
    <nav
      className={`px-auto left-0 right-0 top-0 z-50 flex items-center justify-between bg-black px-8 transition-all md:px-10 lg:px-32 ${
        isScrolled ? 'fixed py-2' : 'py-6'
      }`}
    >
      <Link href="/">
        <Logo />
      </Link>

      {/* Mobile Menu */}
      <section className="flex md:hidden">
        <HamburguerIcon onClick={openMenu} />
        <div
          className={`absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-evenly bg-white transition-all duration-300 ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <CrossIcon onClick={closeMenu} />
          <ul className="flex min-h-[250px] flex-col items-center justify-between text-2xl font-normal leading-8 text-black">
            <Link href="#about">
              <li className="cursor-pointer" onClick={closeMenu}>
                About
              </li>
            </Link>
            <Link href="#projects">
              <li className="cursor-pointer" onClick={closeMenu}>
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="cursor-pointer" onClick={closeMenu}>
                Contact
              </li>
            </Link>
            <ChangeThemeIcon />
          </ul>
        </div>
      </section>

      {/* Desktop Menu */}
      <ul className="hidden items-center justify-end space-x-10 text-2xl font-normal leading-8 md:flex">
        <Link href="#about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link href="#projects">
          <li className="cursor-pointer">Projects</li>
        </Link>
        <Link href="#contact">
          <li className="cursor-pointer">Contact</li>
        </Link>
        <ChangeThemeIcon />
      </ul>
    </nav>
  )
}

type MenuIconProps = {
  onClick: () => void
}

const CrossIcon = ({ onClick }: MenuIconProps) => (
  <div
    className="absolute top-0 right-0 cursor-pointer px-8 py-8"
    onClick={onClick}
  >
    <svg
      className="h-8 w-8 text-gray-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
)

const HamburguerIcon = ({ onClick }: MenuIconProps) => (
  <div className="cursor-pointer space-y-2 md:hidden" onClick={onClick}>
    <div className="h-0.5 w-8 rounded-lg bg-white"></div>
    <div className="h-0.5 w-8 rounded-lg bg-white"></div>
    <div className="h-0.5 w-8 rounded-lg bg-white"></div>
  </div>
)

const ChangeThemeIcon = () => {
  const { changeTheme } = useTheme()
  return (
    <button onClick={changeTheme}>
      <div className="h-4 w-4 rounded-full bg-primary" />
    </button>
  )
}

export default Navbar
