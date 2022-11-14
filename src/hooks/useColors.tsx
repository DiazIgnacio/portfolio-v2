import { useEffect, useState } from 'react'
import { theme } from 'tailwind.config'

const rgbToHex = (r: number, g: number, b: number) => {
  const hex = [r, g, b]
    .map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')
  return `#${hex}`
}

export const useColors = () => {
  const [colors, setColors] = useState(theme.extend.colors)

  useEffect(() => {
    const newColors = {
      primary: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-primary'
      ),
      'primary-dark': getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-primaryDark'),
      gradientTo: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-gradientTo'
      )
    }

    const newColorsHex = Object.keys(newColors).reduce(
      (acc: any, key: string) => {
        const rgb = newColors[key].match(/\d+/g)
        if (rgb) {
          acc[key] = rgbToHex(+rgb[0], +rgb[1], +rgb[2])
        }
        return acc
      },
      {}
    )

    setColors(colors => ({ ...colors, ...newColorsHex }))
  }, [])

  return colors
}
