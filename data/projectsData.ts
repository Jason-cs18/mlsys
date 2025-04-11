interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Efficient Avatar Synthesis',
    description: `Efficiently serving 2D and 3D avatars on resource-constrained devices.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Reliable On-Device Inference',
    description: `Improving robustness of on-device inference in dynamic environments`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Trustworthy AI Agents',
    description: `Building trustworthy AI agents that can be self-evolution in the real world.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
