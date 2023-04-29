import { ReactNode } from 'react'

export type ServiceProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string
  description: string
  Icon: ReactNode
}

const Service = ({ name, description, Icon, ...props }: ServiceProps) => (
  <div className="flex items-center" {...props}>
    <div>{Icon}</div>
    <div className="ml-4">
      <h2 className="text-base font-bold leading-6 text-black lg:text-xl">
        {name}
      </h2>
      <p className="mt-3 text-xs font-normal leading-4 text-grey">
        {description}
      </p>
    </div>
  </div>
)

export default Service
