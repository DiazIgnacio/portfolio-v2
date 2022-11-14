import withColor from 'src/helpers/withColor'
import type { LogoProps } from '../../types/Logo'

const Phone = ({ color, ...props }: LogoProps) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.41333 5.19333C3.37333 7.08 4.92 8.62 6.80667 9.58667L8.27333 8.12C8.45333 7.94 8.72 7.88 8.95333 7.96C9.7 8.20667 10.5067 8.34 11.3333 8.34C11.7 8.34 12 8.64 12 9.00667V11.3333C12 11.7 11.7 12 11.3333 12C5.07333 12 0 6.92667 0 0.666667C0 0.3 0.3 0 0.666667 0H3C3.36667 0 3.66667 0.3 3.66667 0.666667C3.66667 1.5 3.8 2.3 4.04667 3.04667C4.12 3.28 4.06667 3.54 3.88 3.72667L2.41333 5.19333Z"
      fill={color}
    />
  </svg>
)

export default withColor(Phone)
