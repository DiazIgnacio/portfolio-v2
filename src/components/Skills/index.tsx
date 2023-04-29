import services from 'src/constants/services'
import Container from '../Container'

import Service from './Service'
import Skill from './Skill'

const Skills = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <Container className={`${className}`} {...props}>
      <div className="mr-16 w-full">
        <h1 className="text-3xl font-bold text-primary">My Skills</h1>
        <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-12 md:grid-cols-2">
          <Skill name="HTML" percentage={90} data-aos="zoom-in-right" />
          <Skill
            name="CSS"
            percentage={80}
            data-aos="zoom-in-right"
            data-aos-delay="200"
          />
          <Skill
            name="JavaScript"
            percentage={70}
            data-aos="zoom-in-right"
            data-aos-delay="400"
          />
          <Skill
            name="React"
            percentage={60}
            data-aos="zoom-in-right"
            data-aos-delay="600"
          />
        </div>
      </div>
      <div className="mt-16 w-full">
        <h1 className="text-3xl font-bold text-primary">Services</h1>
        <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <Service
              key={service.name}
              name={service.name}
              description={service.description}
              Icon={service.Icon}
              data-aos="zoom-in-right"
              data-aos-delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Skills
