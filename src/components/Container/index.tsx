const Container = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <section className="bg-white py-16">
      <div className={`mx-auto w-10/12 ${className}`} {...props}>
        {children}
      </div>
    </section>
  )
}

export default Container
