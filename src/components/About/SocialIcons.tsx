import Github from '../Logos/Github'
import Linkedin from '../Logos/Linkedin'

const SocialIcons = () => (
  <div className="mt-10 flex items-center">
    <a
      href="https://www.linkedin.com/in/diaz-ignacio/"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-10"
    >
      <Linkedin color="#151419" />
    </a>
    <a
      href="https://github.com/DiazIgnacio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github color="#151419" />
    </a>
  </div>
)

export default SocialIcons
