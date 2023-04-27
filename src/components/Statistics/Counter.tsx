import { useEffect, useState } from 'react'

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

export default Counter
