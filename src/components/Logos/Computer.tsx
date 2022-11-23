import { useColors } from 'src/hooks/useColors'
import type { LogoProps } from '../../types/Logo'

const Computer = ({ ...props }: LogoProps) => {
  const { primary, gradientTo } = useColors()
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_109_96)">
        <g filter="url(#filter0_d_109_96)">
          <path
            d="M67.1667 60.0002C70.8333 60.0002 73.8 57.0002 73.8 53.3335L73.8333 20.0002C73.8333 16.3335 70.8333 13.3335 67.1667 13.3335H13.8333C10.1667 13.3335 7.16667 16.3335 7.16667 20.0002V53.3335C7.16667 57.0002 10.1667 60.0002 13.8333 60.0002H0.5V66.6668H80.5V60.0002H67.1667ZM13.8333 20.0002H67.1667V53.3335H13.8333V20.0002Z"
            fill="url(#paint0_linear_109_96)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_109_96"
          x="-16.5"
          y="2.3335"
          width="110"
          height="83.3335"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0823529 0 0 0 0 0.0784314 0 0 0 0 0.0980392 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_109_96"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_109_96"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_109_96"
          x1="40.5"
          y1="13.3335"
          x2="40.5"
          y2="66.6668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primary} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <clipPath id="clip0_109_96">
          <rect
            width="80"
            height="80"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Computer
