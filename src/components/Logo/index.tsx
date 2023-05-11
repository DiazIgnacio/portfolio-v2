import { HTMLAttributes, forwardRef } from 'react'

const Logo = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`text-4xl uppercase leading-10 md:text-5xl ${
          className ?? ''
        }`}
        ref={ref}
        {...props}
      >
        <span className="font-logo-first-letter">I</span>
        <span className="font-logo">gnacio</span>
      </div>
    )
  }
)

export default Logo
