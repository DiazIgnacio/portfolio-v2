import Container from '../Container'
import Heart from '../Logos/Heart'

const Statistics = () => {
  return (
    <Container
      background={<Background />}
      className="flex flex-col text-center md:flex-row"
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

const Background = () => (
  <>
    <img
      src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
      alt=""
      className="absolute inset-0 -z-30 h-full w-full object-cover"
    />

    <span className="absolute inset-0 -z-20 h-full w-full bg-black opacity-75"></span>
    <span className="absolute inset-0 -z-10 h-full w-full bg-primary opacity-10"></span>
  </>
)

export default Statistics
