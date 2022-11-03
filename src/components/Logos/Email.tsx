import type { LogoProps } from '../../types/Logo'

const Email = ({ color = '#F8F8F8', ...props }: LogoProps) => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3333 0.666687H1.66659C0.933252 0.666687 0.339919 1.26669 0.339919 2.00002L0.333252 10C0.333252 10.7334 0.933252 11.3334 1.66659 11.3334H12.3333C13.0666 11.3334 13.6666 10.7334 13.6666 10V2.00002C13.6666 1.26669 13.0666 0.666687 12.3333 0.666687ZM12.3333 3.33335L6.99992 6.66669L1.66659 3.33335V2.00002L6.99992 5.33335L12.3333 2.00002V3.33335Z"
      fill={color}
    />
  </svg>
)

export default Email
