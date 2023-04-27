import { useRef } from 'react'
import { useIsElementVisible } from 'src/hooks/useIsVisible'

import Container from '../Container'
import { Computer, Heart, Suitcase } from '../Logos'
import ScrollableBackground from '../ScrollableBackground'
import StatItem from './StatItem'

const Statistics = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useIsElementVisible(ref.current)

  return (
    <Container background={<ScrollableBackground />} {...props}>
      <div
        ref={ref}
        className={`flex flex-col space-y-16 text-center md:flex-row md:space-y-0 ${className}`}
      >
        <StatItem
          count={99}
          isVisible={isVisible}
          text="Happy Clients"
          icon={<Heart className="mx-auto" />}
        />
        <StatItem
          count={999}
          isVisible={isVisible}
          text="Working Hours"
          icon={<Computer className="mx-auto" />}
        />
        <StatItem
          count={25}
          isVisible={isVisible}
          text="Finished Projects"
          icon={<Suitcase className="mx-auto" />}
        />
      </div>
    </Container>
  )
}

export default Statistics
