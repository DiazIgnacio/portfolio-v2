import { useColors } from 'src/hooks/useColors'

const WaveBack = (props: React.HTMLAttributes<SVGElement>) => {
  const { 'primary-dark': primaryDark } = useColors()
  return (
    <svg
      width="1512"
      height="381"
      viewBox="0 0 1512 381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_6_15)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8L54 49C105 87 203 160.5 303 213.5C404 266.5 504 252 605 214C706 176 806 70 907 33C1008 -5 1109 25 1210 40C1310 55 1411 55 1462 55H1512V373H1462C1411 373 1310 373 1210 373C1109 373 1008 373 907 373C806 373 706 373 605 373C504 373 403 373 302 373C202 373 101 373 50 373H0V8Z"
          fill={primaryDark}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8L54 49C105 87 203 160.5 303 213.5C404 266.5 504 252 605 214C706 176 806 70 907 33C1008 -5 1109 25 1210 40C1310 55 1411 55 1462 55H1512V373H1462C1411 373 1310 373 1210 373C1109 373 1008 373 907 373C806 373 706 373 605 373C504 373 403 373 302 373C202 373 101 373 50 373H0V8Z"
          stroke="#151419"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_6_15"
          x="-8"
          y="0"
          width="1528"
          height="381"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_6_15"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default WaveBack
