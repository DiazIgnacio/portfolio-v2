import Container from '../Container'
import WebDevelopment from '../Logos/WebDevelopment'

const Skills = () => {
  return (
    <Container className="flex flex-col lg:flex-row">
      <div className="mr-16 w-full lg:w-1/2">
        <h1 className="text-3xl font-bold text-primary">My Skills</h1>
        <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-12 md:grid-cols-2">
          <Skill name="HTML" percentage={90} />
          <Skill name="CSS" percentage={80} />
          <Skill name="JavaScript" percentage={70} />
          <Skill name="React" percentage={60} />
        </div>
      </div>
      <div className="mt-16 w-full lg:mt-0 lg:w-1/2">
        <h1 className="text-3xl font-bold text-primary">Services</h1>
        <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-12 md:grid-cols-2">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </Container>
  )
}

const Service = () => (
  <div className="flex items-center">
    <div>
      <WebDevelopment />
    </div>
    <div className="ml-4">
      <h2 className="text-base font-bold leading-6 text-black lg:text-xl">
        Web Development
      </h2>
      <p className="mt-3 text-xs font-normal leading-4 text-grey">
        Responsive web design and development
      </p>
    </div>
  </div>
)

type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  percentage?: number
}

const ProgressBar = ({ percentage = 0, ...props }: ProgressBarProps) => {
  return (
    <div className="relative mt-4 h-4 w-full rounded-full bg-black" {...props}>
      <div
        className="absolute top-0 left-0 z-10 h-full rounded-full bg-gradient-to-r"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

type SkillProps = ProgressBarProps & { name: string }

const Skill = ({ name, percentage = 0, ...props }: SkillProps) => (
  <div {...props}>
    <h2 className="text-2xl font-bold text-black">{name}</h2>
    <ProgressBar percentage={percentage} />
  </div>
)

export default Skills
