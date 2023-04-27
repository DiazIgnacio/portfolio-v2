import { Email, Github, Linkedin, Phone } from '../Logos'

const Infobar = () => (
  <div className="hidden h-10 w-screen items-center justify-around bg-primary md:flex">
    <div className="flex">
      <span className="mr-7 flex items-center text-sm font-normal leading-10">
        <Email className="mr-4" />
        <a href="mailto:diaz.ignacio023@gmail.com">Email Me!</a>
      </span>
      <span className="flex items-center text-sm font-normal leading-10">
        <Phone className="mr-4" />
        <a href="tel:+5493416962877">Call Me!</a>
      </span>
    </div>
    <div className="flex items-center">
      <a
        href="https://github.com/DiazIgnacio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="mr-11 cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/diaz-ignacio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="cursor-pointer" />
      </a>
    </div>
  </div>
)

export default Infobar
