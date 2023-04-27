import Counter from './Counter'

type StatItemProps = {
  icon: React.ReactNode
  text: string
  count: number
  duration?: number
  isVisible: boolean
}

const StatItem = ({
  icon,
  text,
  count,
  duration = 5000,
  isVisible
}: StatItemProps) => {
  return (
    <div className="w-full md:w-1/3">
      {icon}
      <h4 className="mt-7 text-6xl font-bold leading-10 text-white">
        +<Counter count={count} duration={duration} isVisible={isVisible} />
      </h4>
      <p className="mt-7 text-sm font-normal leading-5 text-grey">{text}</p>
    </div>
  )
}

export default StatItem
