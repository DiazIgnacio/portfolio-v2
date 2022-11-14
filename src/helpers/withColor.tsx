import { useColors } from 'src/hooks/useColors'
import { HOCLogoProps } from 'src/types/Logo'

// hoc
const withColor = (WrappedComponent: React.ComponentType<any>) => {
  const WithColor = (props: HOCLogoProps) => {
    const { white, black } = useColors()
    return <WrappedComponent {...props} color={props.filled ? black : white} />
  }
  return WithColor
}

export default withColor
