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
    title: 'Accounting Study Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-accounting-study-page.png',
    link: 'https://estudioevangelisti.com.ar/',
    col: 2,
    row: 1
  },
  {
    title: 'Calendar App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-calendar-app.jpeg',
    link: 'https://calendar-app-diazignacio.vercel.app',
    col: 1,
    row: 1
  },
  {
    title: 'Tic Tac Toe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-tic-tac-toe.png',
    link: 'https://rd-tictactoe.netlify.app/',
    col: 1,
    row: 2
  },
  {
    title: 'Agency Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-agency-landing-page.png',
    link: 'https://rosario-developers.github.io/',
    col: 2,
    row: 1
  },
  {
    title: 'Shopify Ecommerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-shopify-e-commerce.png',
    link: 'https://e-commerce-diaz-ignacio.netlify.app/',
    col: 1,
    row: 1
  },
  {
    title: 'Portfolio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-portfolio.png',
    link: 'https://portfolio-diazignacio.vercel.app/',
    col: 1,
    row: 1
  }
]

export { projects }
