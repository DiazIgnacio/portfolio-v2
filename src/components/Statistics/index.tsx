import Container from '../Container'
import Heart from '../Logos/Heart'

import Background from './Background'

const Statistics = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Container
      background={<Background />}
      className={`flex flex-col text-center md:flex-row ${className}`}
      {...props}
    >
      <div className="w-full md:w-1/3">
        <Heart className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">+99</h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Happy Clients
        </p>
      </div>
      <div className="mt-16 w-full md:mt-0 md:w-1/3">
        <Heart className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">+99</h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Happy Clients
        </p>
      </div>
      <div className="mt-16 w-full md:mt-0 md:w-1/3">
        <Heart className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">+99</h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Happy Clients
        </p>
      </div>
    </Container>
  )
}

export default Statistics
