import WaveBack from '../Logos/Waves/WaveBack'
import WaveFront from '../Logos/Waves/WaveFront'

const Waves = () => (
  <div className="relative flex-auto">
    <WaveBack className="absolute -bottom-8 z-0" />
    <WaveFront className="absolute inset-0 z-10" />
  </div>
)

export default Waves
