import { theme } from 'tailwind.config'

export const useColors = () => {
  const colors = theme.extend.colors

  return colors
}
