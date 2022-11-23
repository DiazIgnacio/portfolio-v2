import { useEffect, useRef, useState } from 'react'
import { useIsElementVisible } from 'src/hooks/useIsVisible'

import Container from '../Container'
import Computer from '../Logos/Computer'
import Heart from '../Logos/Heart'
import Suitcase from '../Logos/Suitcase'
import ScrollableBackground from '../ScrollableBackground'

const Statistics = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsElementVisible(ref.current)

  return (
    <Container
      background={<ScrollableBackground />}
      className={`flex flex-col text-center md:flex-row ${className}`}
      ref={ref}
      {...props}
    >
      <div className="w-full md:w-1/3">
        <Heart className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">
          +<Counter count={99} duration={5000} isVisible={isVisible} />
        </h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Happy Clients
        </p>
      </div>
      <div className="mt-16 w-full md:mt-0 md:w-1/3">
        <Computer className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">
          +<Counter count={999} duration={5000} isVisible={isVisible} />
        </h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Working Hours
        </p>
      </div>
      <div className="mt-16 w-full md:mt-0 md:w-1/3">
        <Suitcase className="mx-auto" />
        <h4 className="mt-7 text-6xl font-bold leading-10 text-white">
          +<Counter count={20} duration={5000} isVisible={isVisible} />
        </h4>
        <p className="mt-7 text-sm font-normal leading-5 text-grey">
          Finished Projects
        </p>
      </div>
    </Container>
  )
}

type CounterProps = {
  className?: string
  count: number
  duration: number
  isVisible: boolean
}

const Counter = ({ count, duration, isVisible }: CounterProps) => {
  const [currentCount, setCurrentCount] = useState(0)

  const step = duration / count

  useEffect(() => {
    if (currentCount < count && isVisible) {
      setTimeout(() => {
        setCurrentCount(currentCount + 1)
      }, step)
    }
  }, [currentCount, isVisible])

  return <span>{currentCount}</span>
}

export default Statistics
