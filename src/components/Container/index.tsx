import { forwardRef } from 'react'

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  background?: JSX.Element
  black?: boolean
}
// add types
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      background,
      id = '',
      black = false,
      ...props
    }: ContainerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <section
        className={`relative overflow-hidden py-12 md:py-16 ${
          background ? '' : black ? 'bg-black' : 'bg-white'
        }`}
        id={id}
        ref={ref}
      >
        {background && background}
        <div
          className={`mx-auto w-10/12 ${className ? className : ''}`}
          {...props}
        >
          {children}
        </div>
      </section>
    )
  }
)

export default Container
