import withColor from 'src/helpers/withColor'
import type { LogoProps } from '../../types/Logo'

const Linkedin = ({ color, ...props }: LogoProps) => (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.666748 1.838C0.666748 1.35053 0.860394 0.883032 1.20509 0.53834C1.54978 0.193648 2.01728 2.45031e-06 2.50475 2.45031e-06H20.8267C21.0683 -0.000392101 21.3076 0.0468654 21.5309 0.139069C21.7542 0.231273 21.9571 0.366612 22.128 0.537339C22.2989 0.708065 22.4345 0.910826 22.5269 1.13401C22.6194 1.3572 22.6669 1.59643 22.6667 1.838V20.16C22.667 20.4016 22.6196 20.6409 22.5273 20.8642C22.435 21.0875 22.2996 21.2904 22.1288 21.4613C21.958 21.6322 21.7551 21.7678 21.5319 21.8602C21.3086 21.9526 21.0694 22.0001 20.8277 22H2.50475C2.26329 22 2.02421 21.9524 1.80115 21.86C1.57808 21.7676 1.37542 21.6321 1.20473 21.4613C1.03405 21.2905 0.89868 21.0878 0.806371 20.8647C0.714061 20.6416 0.666617 20.4025 0.666748 20.161V1.838ZM9.37475 8.388H12.3537V9.884C12.7837 9.024 13.8837 8.25 15.5367 8.25C18.7057 8.25 19.4567 9.963 19.4567 13.106V18.928H16.2497V13.822C16.2497 12.032 15.8197 11.022 14.7277 11.022C13.2127 11.022 12.5827 12.111 12.5827 13.822V18.928H9.37475V8.388ZM3.87475 18.791H7.08275V8.25H3.87475V18.79V18.791ZM7.54175 4.812C7.5478 5.08668 7.49892 5.35979 7.39799 5.61532C7.29706 5.87084 7.1461 6.10364 6.95398 6.30003C6.76186 6.49643 6.53245 6.65248 6.2792 6.75901C6.02596 6.86554 5.75399 6.92042 5.47925 6.92042C5.20451 6.92042 4.93254 6.86554 4.67929 6.75901C4.42605 6.65248 4.19664 6.49643 4.00452 6.30003C3.8124 6.10364 3.66144 5.87084 3.56051 5.61532C3.45958 5.35979 3.4107 5.08668 3.41675 4.812C3.42862 4.27286 3.65113 3.75979 4.03663 3.38269C4.42213 3.00558 4.93997 2.79442 5.47925 2.79442C6.01852 2.79442 6.53636 3.00558 6.92186 3.38269C7.30736 3.75979 7.52988 4.27286 7.54175 4.812Z"
      fill={color}
    />
  </svg>
)

export default withColor(Linkedin)
