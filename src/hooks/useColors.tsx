import { useEffect, useState } from 'react'
import { useTheme } from 'src/contexts/ThemeContext'
import { theme } from 'tailwind.config'

type colors = {
  primary?: string
  primaryDark?: string
  gradientTo?: string
  white?: string
  black?: string
}

export const useColors = () => {
  const { theme: currentTheme } = useTheme()
  const [colors, setColors] = useState<colors>({})

  useEffect(() => {
    setTimeout(() => {
      const newColors = getComputedColors()
      setColors({ ...theme.extend.colors, ...computedColorsToHex(newColors) })
    }, 0)
  }, [currentTheme])

  return colors
}

const globalColorsVariables = [
  '--color-primary',
  '--color-primaryDark',
  '--color-gradientTo'
]

const getComputedColors = () =>
  globalColorsVariables.reduce((acc: any, color: string) => {
    const key = color.replace('--color-', '')
    return {
      ...acc,
      [key]: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-primary'
      )
    }
  }, {})

const computedColorsToHex = (colors: { [key: string]: string }) =>
  Object.keys(colors).reduce((acc: any, key: string) => {
    const rgb = colors[key].match(/\d+/g)
    if (rgb) {
      acc[key] = rgbToHex(+rgb[0], +rgb[1], +rgb[2])
    }
    return acc
  }, {})

const rgbToHex = (r: number, g: number, b: number) => {
  const hex = [r, g, b]
    .map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')
  return `#${hex}`
}
