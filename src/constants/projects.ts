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
    title: 'Shopify Ecommerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://www.animaapp.com/blog/wp-content/uploads/2022/08/figma-shopify-react-app-cover.jpg',
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
    row: 2
  },
  {
    title: 'Tasks List Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-tasks-list-manager.png',
    link: 'https://tasks-list-manager.vercel.app',
    col: 2,
    row: 1
  },
  {
    title: 'Web3 Crowdfunding App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-web3-crowdfunding-app.png',
    link: 'https://web3-crowdfunding-diaz-ignacio.netlify.app/',
    col: 1,
    row: 1
  },
  {
    title: 'Calendar App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'images/projects/ignacio-diaz-calendar-app.png',
    link: 'https://calendar-app-diazignacio.vercel.app',
    col: 1,
    row: 1
  }
]

export { projects }
