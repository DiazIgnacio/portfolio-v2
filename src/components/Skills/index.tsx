import Container from '../Container'
import Service from './Service'
import Skill from './Skill'

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
          <Service
            name="Web Development"
            description="Responsive web design and development"
          />
          <Service
            name="Web Development"
            description="Responsive web design and development"
          />
          <Service
            name="Web Development"
            description="Responsive web design and development"
          />
          <Service
            name="Web Development"
            description="Responsive web design and development"
          />
        </div>
      </div>
    </Container>
  )
}

export default Skills
