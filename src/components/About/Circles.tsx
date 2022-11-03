const Circles = () => (
  <div className="relative top-0 left-0 mx-auto aspect-square w-10/12 lg:mx-0 lg:w-11/12">
    <div className="absolute top-0 left-0 aspect-square w-full rounded-full bg-primary-dark"></div>
    <div className="absolute top-1/2 -right-2 z-10 aspect-square w-11/12 -translate-y-1/2 rounded-full bg-primary">
      <div className="absolute bottom-0 left-2 aspect-square w-[87%] overflow-hidden rounded-full bg-primary-dark">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFeJZJ0VQ3Qbg/profile-displayphoto-shrink_800_800/0/1641076824457?e=1672876800&v=beta&t=s_hbPfHemwmkqt8BqA7Z7EKLgNjuRbTCljB5dgDgLTk"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
)

export default Circles
