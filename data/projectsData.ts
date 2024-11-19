interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Efficient Avatar Synthesis',
    description: `Efficiently serving 2D and 3D avatars on mobile phones.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Reliable On-Device AI',
    description: `Improving robustness of on-device inference in dynamic environments`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Serving Diffusion Models on Heterogeneous Devices',
    description: `Efficiently serving large diffusion models on heterogeneous devices`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
