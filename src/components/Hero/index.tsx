import Infobar from './InfoBar'
import Navbar from './Navbar'
import Waves from './Waves'

const Hero = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <section
      className={`relative h-screen bg-black text-white ${className}`}
      {...props}
    >
      <Infobar />
      <Navbar />
      <div className="mx-32 mt-20 w-4/5 max-w-[660px]">
        <h2 className="text-3xl font-normal leading-9">I'm Ignacio</h2>
        <h1 className="mt-1 text-6xl font-semibold leading-[70px] text-primary">
          Front End Developer
        </h1>
        <p className="mt-5 text-base leading-8 md:text-lg lg:text-xl">
          Hi! I'm Ignacio Diaz, a Frontend Web Developer based in Argentina. I
          have a passion for all things web, and love working on interactive and
          responsive websites. In my free time, I like to read and spend time
          with my family and friends.
        </p>
        <button className="bg-gradient-to-t-primary relative z-20 mt-10 cursor-pointer rounded-2xl px-12 py-5 text-2xl font-medium leading-6">
          Portfolio
        </button>
      </div>
      <Waves />
    </section>
  )
}

export default Hero
