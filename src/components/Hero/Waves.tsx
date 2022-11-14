import WaveBack from '../Logos/Waves/WaveBack'
import WaveFront from '../Logos/Waves/WaveFront'

const Waves = (props: React.HTMLProps<HTMLDivElement>) => (
  <div className="absolute bottom-0 left-0 right-0" {...props}>
    <WaveBack className="absolute bottom-8 z-0" />
    <WaveFront className="absolute bottom-0 z-10" />
  </div>
)

export default Waves
