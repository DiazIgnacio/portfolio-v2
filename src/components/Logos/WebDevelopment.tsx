import type { LogoProps } from '../../types/Logo'

const WebDevelopment = ({ color = '#151419', ...props }: LogoProps) => {
  return (
    <svg
      width="59"
      height="42"
      viewBox="0 0 59 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.9 6C5.9 2.69063 8.54578 0 11.8 0H47.2C50.4542 0 53.1 2.69063 53.1 6V30H47.2V6H11.8V30H5.9V6ZM0 34.8C0 33.8063 0.792813 33 1.77 33H57.23C58.2072 33 59 33.8063 59 34.8C59 38.775 55.8288 42 51.92 42H7.08C3.17125 42 0 38.775 0 34.8ZM25.9047 16.5938L23.0469 19.5L25.9047 22.4062C26.7712 23.2875 26.7712 24.7125 25.9047 25.5844C25.0381 26.4562 23.6369 26.4656 22.7795 25.5844L18.3545 21.0844C17.488 20.2031 17.488 18.7781 18.3545 17.9062L22.7795 13.4062C23.6461 12.525 25.0473 12.525 25.9047 13.4062C26.762 14.2875 26.7712 15.7125 25.9047 16.5844V16.5938ZM36.2297 13.4062L40.6547 17.9062C41.5213 18.7875 41.5213 20.2125 40.6547 21.0844L36.2297 25.5844C35.3631 26.4656 33.9619 26.4656 33.1045 25.5844C32.2472 24.7031 32.238 23.2781 33.1045 22.4062L35.9623 19.5L33.1045 16.5938C32.238 15.7125 32.238 14.2875 33.1045 13.4156C33.9711 12.5438 35.3723 12.5344 36.2297 13.4156V13.4062Z"
        fill={color}
      />
    </svg>
  )
}

export default WebDevelopment