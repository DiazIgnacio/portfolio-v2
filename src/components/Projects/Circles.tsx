type Circles = HTMLDivElement & {
  rotate?: boolean
}

const Circles = ({ rotate = false, ...props }) => (
  <div
    className={`absolute mx-auto aspect-square w-1/3 md:h-1/3 md:w-auto lg:mx-0 ${
      rotate
        ? '-right-[8.33%] bottom-16 translate-x-1/2 rotate-180'
        : '-left-[8.33%] top-16 -translate-x-1/2'
    }`}
    {...props}
  >
    {/* Outer Circle */}
    <div className="bg-gradient-to-t-primary absolute top-0 left-0 aspect-square w-full rounded-full">
      {/* Inner Circle */}
      <div className="absolute bottom-0 left-1/2 z-10 aspect-square w-[87%] -translate-x-1/2 rounded-full bg-primary">
        {/* Main Circle */}
        <div className="absolute top-0 left-1/2  aspect-square w-[87%] -translate-x-1/2 overflow-hidden rounded-full bg-white"></div>
      </div>
    </div>
  </div>
)

export default Circles
