import { forwardRef } from 'react'

const Logo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="cursor-pointer text-4xl uppercase leading-10 md:text-5xl"
      ref={ref}
      {...props}
    >
      <span className="font-logo-first-letter">I</span>
      <span className="font-logo">gnacio</span>
    </div>
  )
})

export default Logo
