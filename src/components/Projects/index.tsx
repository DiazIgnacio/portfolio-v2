import { useEffect, useRef, useState } from 'react'
import Container from '../Container'

type Project = {
  title: string
  description: string
  image: string
  link: string
  col: number
  row: number
}

const projects: Array<Project> = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    link: 'https://www.google.com',
    col: 2,
    row: 1
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    link: 'https://www.google.com',
    col: 1,
    row: 1
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    link: 'https://www.google.com',
    col: 1,
    row: 2
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    link: 'https://www.google.com',
    col: 2,
    row: 1
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    link: 'https://www.google.com',
    col: 1,
    row: 1
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80',
    link: 'https://www.google.com',
    col: 1,
    row: 1
  }
]

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

const Circles = ({ rotate = false }) => (
  <div
    className={`absolute mx-auto aspect-square h-1/3 lg:mx-0 ${
      rotate
        ? '-right-[8.33%] bottom-16 translate-x-1/2 rotate-180'
        : '-left-[8.33%] top-16 -translate-x-1/2'
    }`}
  >
    {/* Outer Circle */}
    <div className="absolute top-0 left-0 aspect-square w-full rounded-full bg-gradient-to-t">
      {/* Inner Circle */}
      <div className="absolute bottom-0 left-1/2 z-10 aspect-square w-[87%] -translate-x-1/2 rounded-full bg-primary">
        {/* Main Circle */}
        <div className="absolute top-0 left-1/2  aspect-square w-[87%] -translate-x-1/2 overflow-hidden rounded-full bg-white"></div>
      </div>
    </div>
  </div>
)

export default Projects
