export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  percentage?: number
}

const ProgressBar = ({ percentage = 0, ...props }: ProgressBarProps) => {
  return (
    <div className="relative mt-4 h-4 w-full rounded-full bg-black" {...props}>
      <div
        className="bg-gradient-to-r-primary absolute top-0 left-0 z-10 h-full rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
