import { useColors } from 'src/hooks/useColors'
import { LogoProps } from 'src/types/Logo'

const Suitcase = ({ ...props }: LogoProps) => {
  const { primary, gradientTo } = useColors()
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_109_98)">
        <g filter="url(#filter0_d_109_98)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.6667 10C34.0146 10 31.471 11.0536 29.5957 12.9289C27.7203 14.8043 26.6667 17.3478 26.6667 20V23.3333H16.6667C14.0146 23.3333 11.471 24.3869 9.59568 26.2623C7.72032 28.1376 6.66675 30.6812 6.66675 33.3333V60C6.66675 62.6522 7.72032 65.1957 9.59568 67.0711C11.471 68.9464 14.0146 70 16.6667 70H63.3334C65.9856 70 68.5291 68.9464 70.4045 67.0711C72.2798 65.1957 73.3334 62.6522 73.3334 60V33.3333C73.3334 30.6812 72.2798 28.1376 70.4045 26.2623C68.5291 24.3869 65.9856 23.3333 63.3334 23.3333H53.3334V20C53.3334 17.3478 52.2798 14.8043 50.4045 12.9289C48.5291 11.0536 45.9856 10 43.3334 10H36.6667ZM46.6667 23.3333H33.3334V20C33.3334 19.1159 33.6846 18.2681 34.3097 17.643C34.9348 17.0179 35.7827 16.6667 36.6667 16.6667H43.3334C44.2175 16.6667 45.0653 17.0179 45.6904 17.643C46.3156 18.2681 46.6667 19.1159 46.6667 20V23.3333Z"
            fill="url(#paint0_linear_109_98)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_109_98"
          x="-10.3333"
          y="-1"
          width="96.6667"
          height="90"
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
            result="effect1_dropShadow_109_98"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_109_98"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_109_98"
          x1="40.0001"
          y1="10"
          x2="40.0001"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primary} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
        <clipPath id="clip0_109_98">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Suitcase
