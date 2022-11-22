import { useColors } from 'src/hooks/useColors'

const WaveFront = (props: React.HTMLAttributes<SVGElement>) => {
  const { primary, gradientTo } = useColors()
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1512 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <g filter="url(#filter0_d_6_14)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 52L50 90C101 128 202 204 302 257C403 310 504 340 605 302C706 264 806 158 907 121C1008 83 1109 113 1210 128C1310 143 1411 143 1462 143H1512V461H1462C1411 461 1310 461 1210 461C1109 461 1008 461 907 461C806 461 706 461 605 461C504 461 403 461 302 461C202 461 101 461 50 461H0V52Z"
          fill="url(#paint0_linear_6_14)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6_14"
          x="-48"
          y="0"
          width="1608"
          height="505"
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
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="24" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_14"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_14"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_6_14"
          x1="756"
          y1="52"
          x2="756"
          y2="461"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primary} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WaveFront
