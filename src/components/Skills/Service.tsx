import WebDevelopment from '../Logos/WebDevelopment'

export type ServiceProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string
  description: string
}

const Service = ({ name, description }: ServiceProps) => (
  <div className="flex items-center">
    <div>
      <WebDevelopment />
    </div>
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
