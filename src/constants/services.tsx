import { MdComputer } from 'react-icons/md'
import { FaWrench, FaReact, FaFigma } from 'react-icons/fa'
import { ServiceProps } from 'src/components/Skills/Service'

const services: ServiceProps[] = [
  {
    name: 'Web Development',
    description: 'Responsive web design and development',
    Icon: <MdComputer size={48} className="text-black" />
  },
  {
    name: 'Website Maintenance',
    description:
      'Regularly updating and maintaining websites to ensure they are functioning properly.',
    Icon: <FaWrench size={48} className="text-black" />
  },
  {
    name: 'Front-end Framework Implementation',
    description:
      'Using front-end frameworks to build dynamic and interactive web applications.',
    Icon: <FaReact size={48} className="text-black" />
  },
  {
    name: 'Convert Design into Code',
    description:
      'Translating design files into functional code that can be used to build a website or web application.',
    Icon: <FaFigma size={48} className="text-black" />
  }
]

export default services
