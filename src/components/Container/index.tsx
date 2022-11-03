type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  background: JSX.Element
}

const Container = ({
  children,
  className,
  background,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={`relative overflow-x-hidden py-16 ${
        background ? '' : 'bg-white'
      }`}
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

export default Container
