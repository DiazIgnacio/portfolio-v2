import Infobar from './InfoBar'
import Navbar from './Navbar'
import Waves from './Waves'

const Hero = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <section
      className={`relative flex h-screen flex-col bg-black text-white ${className}`}
      {...props}
    >
      <Infobar />
      <Navbar />
      <div className="mx-auto mt-14 w-4/5 max-w-[660px] lg:mx-32">
        <h2 className="leaading-5 text-lg font-normal md:text-xl md:leading-7 lg:text-3xl lg:leading-9">
          I'm Ignacio
        </h2>
        <h1 className="text-xl font-semibold leading-10 text-primary md:leading-[54px] lg:mt-1 lg:text-3xl lg:leading-[70px] xl:text-6xl">
          Front End Developer
        </h1>
        <p className="mt-1 text-base leading-6 md:mt-3 md:text-lg md:leading-7 lg:mt-5 lg:text-xl lg:leading-8">
          Hi! I'm Ignacio Diaz, a Frontend Web Developer based in Argentina. I
          have a passion for all things web, and love working on interactive and
          responsive websites. In my free time, I like to read and spend time
          with my family and friends.
        </p>
        <button className="bg-gradient-to-t-primary relative z-20 mt-6 cursor-pointer rounded-2xl px-8 py-4 text-lg font-medium leading-6 md:mt-8 md:py-5 md:px-10 md:text-xl lg:mt-10 lg:py-6 lg:px-12 lg:text-2xl">
          Portfolio
        </button>
      </div>
      <Waves />
    </section>
  )
}

export default Hero
