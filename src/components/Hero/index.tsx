import Infobar from './InfoBar'
import Navbar from './Navbar'
import Waves from './Waves'

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

export default Hero
