import Container from '../Container'
import Logo from '../Logo'

const Footer = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Container
      className="space-y-8 md:flex md:items-center md:justify-between md:space-y-0"
      black
    >
      <div className="text-center md:w-1/6">
        <Logo />
      </div>
      <div className="md:w-2/6">
        <p className="text-center text-white md:text-left">
          © 2020 - {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </Container>
  )
}

export default Footer
