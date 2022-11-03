import ProgressBar, { ProgressBarProps } from './ProgressBar'

type SkillProps = ProgressBarProps & { name: string }

const Skill = ({ name, percentage = 0, ...props }: SkillProps) => (
  <div {...props}>
    <h2 className="text-2xl font-bold text-black">{name}</h2>
    <ProgressBar percentage={percentage} />
  </div>
)

export default Skill
