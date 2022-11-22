import { useEffect, useRef, useState } from 'react'

import { projects } from 'src/constants/projects'

import Container from '../Container'

import Circles from './Circles'

import styles from './Projects.module.css'

const Projects = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const gridRef = useRef(null)
  const [colWidth, setColWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const grid = gridRef.current as HTMLDivElement
        const width = grid.getBoundingClientRect().width
        const newColWidth = width / COLUMNS - GAP / 2
        setColWidth(newColWidth)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container className={`w-9/12 ${className}`} {...props}>
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-10 text-primary">Projects</h2>
        <p className="mx-auto mt-5 max-w-[400px] text-lg leading-5 text-grey">
          Some of my latest Work
        </p>
      </div>
      <div className="mt-9 grid grid-cols-3 grid-rows-3 gap-6" ref={gridRef}>
        {projects.map(({ image, col, row, link, title }) => (
          <div
            className={`${col === 1 ? 'col-span-1' : 'col-span-2'} ${
              row === 1 ? 'row-span-1' : 'row-span-2'
            } relative overflow-hidden ${styles.project}`}
            style={{ height: colWidth * row + GAP * (row - 1) }}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full bg-top object-cover"
            />
            <a
              className="absolute inset-0 grid place-items-center bg-primary bg-opacity-0 text-xl opacity-0"
              href={link}
              target="_blank"
            >
              {title}
            </a>
          </div>
        ))}
      </div>
      <Circles />
      <Circles rotate />
    </Container>
  )
}

const GAP = 24
const COLUMNS = 3

export default Projects
