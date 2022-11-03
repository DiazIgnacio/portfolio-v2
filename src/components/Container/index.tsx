type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  background?: JSX.Element
}

const Container = ({
  children,
  className,
  background,
  id = '',
  ...props
}: ContainerProps) => {
  return (
    <section
      className={`relative overflow-x-hidden py-16 ${
        background ? '' : 'bg-white'
      }`}
      id={id}
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
