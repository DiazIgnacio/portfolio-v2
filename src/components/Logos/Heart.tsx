import type { LogoProps } from '../../types/Logo'

const Heart = ({ color = '#F8F8F8', ...props }: LogoProps) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_109_95)">
        <path
          d="M72.1094 22.1563C71.0622 19.7316 69.5522 17.5343 67.6641 15.6876C65.7745 13.8353 63.5466 12.3633 61.1016 11.3516C58.5662 10.2984 55.8469 9.75936 53.1016 9.76568C49.25 9.76568 45.4922 10.8204 42.2266 12.8126C41.4453 13.2891 40.7031 13.8126 40 14.3829C39.2969 13.8126 38.5547 13.2891 37.7734 12.8126C34.5078 10.8204 30.75 9.76568 26.8984 9.76568C24.125 9.76568 21.4375 10.2969 18.8984 11.3516C16.4453 12.3672 14.2344 13.8282 12.3359 15.6876C10.4453 17.5323 8.93498 19.73 7.89062 22.1563C6.80469 24.6797 6.25 27.3594 6.25 30.1172C6.25 32.7188 6.78125 35.4297 7.83594 38.1876C8.71875 40.4922 9.98438 42.8829 11.6016 45.2969C14.1641 49.1172 17.6875 53.1016 22.0625 57.1407C29.3125 63.836 36.4922 68.461 36.7969 68.6485L38.6484 69.836C39.4688 70.3594 40.5234 70.3594 41.3438 69.836L43.1953 68.6485C43.5 68.4532 50.6719 63.836 57.9297 57.1407C62.3047 53.1016 65.8281 49.1172 68.3906 45.2969C70.0078 42.8829 71.2812 40.4922 72.1562 38.1876C73.2109 35.4297 73.7422 32.7188 73.7422 30.1172C73.75 27.3594 73.1953 24.6797 72.1094 22.1563Z"
          fill="url(#paint0_linear_109_95)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_109_95"
          x="-10.75"
          y="-1.23438"
          width="97.4922"
          height="90.4629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_109_95"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_109_95"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_109_95"
          x1="39.9961"
          y1="9.76562"
          x2="39.9961"
          y2="70.2286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0099FF" />
          <stop offset="1" stop-color="#0074C2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Heart
