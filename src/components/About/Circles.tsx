import Image from 'next/image'

const Circles = () => (
  <div className="relative top-0 left-0 mx-auto aspect-square w-10/12 lg:mx-0 lg:w-11/12">
    <div className="absolute top-0 left-0 aspect-square w-full rounded-full bg-primary-dark"></div>
    <div className="absolute top-1/2 -right-2 z-10 aspect-square w-11/12 -translate-y-1/2 rounded-full bg-primary">
      <div className="absolute bottom-0 left-2 grid aspect-square w-[87%] place-items-center overflow-hidden rounded-full">
        <Image
          src="/images/ignacio-diaz-profile-picture.jpg"
          alt="Ignacio Diaz Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
)

export default Circles
