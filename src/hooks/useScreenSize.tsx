import { useEffect, useState } from 'react'

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const useScreenSize = () => {
  const screenSizes = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }

  const [screenSize, setScreenSize] = useState<ScreenSizes>('xs')
  const isMobile = screenSize === 'xs' || screenSize === 'sm'
  const isTablet = screenSize === 'md'
  const isDesktop =
    screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl'

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      // get the closest screen size that's smaller than the current width
      const size = Object.keys(screenSizes).reduce((prev, curr) => {
        return screenSizes[curr] < width ? curr : prev
      }, 'xs')
      size !== screenSize && setScreenSize(size)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [screenSize])

  return { screenSize, isMobile, isDesktop, isTablet }
}

export default useScreenSize
