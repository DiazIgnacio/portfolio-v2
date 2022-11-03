import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { projects } from 'src/constants/projects'
import Circles from './Circles'

const Projects = () => {
  const gridRef = useRef(null)
  const [colWidth, setColWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const grid = gridRef.current as HTMLDivElement
        const width = grid.getBoundingClientRect().width
        const newColWidth = width / 3 - 12
        setColWidth(newColWidth)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container className="w-9/12">
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-10 text-primary">Projects</h2>
        <p className="mx-auto mt-5 max-w-[400px] text-lg leading-5 text-grey">
          Some of my latest Work
        </p>
      </div>
      <div className="mt-9 grid grid-cols-3 grid-rows-3 gap-6" ref={gridRef}>
        {projects.map(({ image, col, row }) => (
          <div
            className={`${col === 1 ? 'col-span-1' : 'col-span-2'} ${
              row === 1 ? 'row-span-1' : 'row-span-2'
            }`}
            style={{ height: colWidth * row + 24 * (row - 1) }}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <Circles />
      <Circles rotate />
    </Container>
  )
}

export default Projects
