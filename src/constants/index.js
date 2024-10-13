import {
  rootNaive,
  hotstar,
  creativeLink,
  superPets,
  concentrix,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  bootstrap,
  sqlite,
  nextjs,
  adp,
  emblixsolutions,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  yuzomart,
  filmx,
  careerconnect,
  aicade,
  miro,
  pillping,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Product & UI/UX Design',
    icon: web,
  },
  {
    title: 'UX Research',
    icon: mobile,
  },
  {
    title: 'Graphic Design',
    icon: backend,
  },
  {
    title: 'Frontend Development',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },

  {
    name: 'miro',
    icon: miro,
  },
]

const experiences = [
  {
    title: 'UI/UX Designer',
    company_name: 'Emblix Solutions',
    icon: emblixsolutions,
    iconBg: '#cccccc',
    date: 'September 2022 - Present',
    points: [
      'Designed a detailed high fidelity wireframes, prototypes and visual designs for mobile and websites and marketing team to create brand layouts to help them with the campaigns.',
      'Analyzed the UI/UX issues in existing designs and came up with a redesign as per the client requirements.',
      'Created seamless end-to-end experiences for products on mobile and web platforms, working collaboratively with managers, marketing specialists, and developers.',
      'Conducted in-depth research to identify pain points and improve the user experience by restructuring user flows, and navigation menu to enhance usability and accessibility.',
    ],
  },
  {
    title: 'Technical Advisor',
    company_name: 'Concentrix',
    icon: concentrix,
    iconBg: '#aaaaaa',
    date: 'November 2021 - September 2022',
    points: [
      'Provided comprehensive support to users by troubleshooting and resolving a wide range of issues related to printers, networks, software, and drivers.',
      'Proactively contributed to revenue growth by identifying opportunities to pitch additional products and services.',
      'Effectively managed escalation calls, ensuring users felt understood and valued, and consistently delivered resolutions that addressed their concerns and restored functionality.',
    ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'UI/UX DESIGN | BIOTECH | MOBILE APP',
    description:
      'An app simplifies and helps users finding long-lost relatives by offering a door-step service where a representative conducts the DNA test at the users home. This removes the hassle of self-testing and shipping, making the process easier, more accurate, and convenient, helping users focus on discovering and connecting with relatives.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'text-violet-600',
      },
      {
        name: 'javascript',
        color: 'text-amber-400',
      },
    ],
    image: rootNaive,
    source_code_link: 'https://github.com/SridharDigital/Career-Connect',
    live_website_link: '#',
  },
  {
    name: 'UI/UX CASE STUDY | PETCARE | E-COMMERCE | MOBILE APP',
    description:
      'SuperPets is an user-friendly app that centralizes pet care management, allowing owners to effortlessly track health records, schedule appointments, and access and manage veterinary appointments. Integrated features for grooming, shopping, and adoption support ensure convenience and holistic pet care management in a single platform.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'text-violet-600',
      },
    ],
    image: superPets,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'UI/UX CASE STUDY | EDTECH | DESIGN NETWORKING | WEB APP',
    description:
      'Creative Link connects designers, educators, and aspiring creatives in one dynamic platform. From sharing portfolios to exploring design inspirations, solving industry challenges through Q&A, and preparing for career growth with mentorship and interview resources—Creative Link empowers users to thrive in the world of design.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'text-violet-600',
      },
    ],
    image: creativeLink,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'UX RESEARCH | PRODUCT IMPOVEMENT | ENTERTAINMENT | OTT',
    description:
      'Focused on addressing key user pain points and enhancing overall usability on Hotstar. Identified issues included the inability to delete multiple downloaded files and challenges in navigating series with many episodes etc. The solution introduced batch deletion functionality for managing downloads more efficiently and a responsive scroll bar for better episode navigation.',
    image: hotstar,
    source_code_link: 'https://github.com/SridharDigital/YuzoMart',
    live_website_link: '#',
  },
  {
    name: 'Filmx',
    description:
      'Filmx aims to provide an epic cinematic experience, offering users a platform to explore, discover, and engage with a vast collection of movies and TV shows.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'text-indigo-500',
      },
      {
        name: 'javascript',
        color: 'text-amber-400',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'restapi',
        color: 'text-green-400',
      },
    ],
    image: filmx,
    source_code_link: 'https://github.com/SridharDigital/Filmx',
    live_website_link: 'https://filmx.vercel.app/',
  },
  {
    name: 'PillPing',
    description:
      'Pillping simplifies health management with trackers for health, vaccinations, appointments, documents, and medications. Designed for ease, it offers a unified platform to track meds, monitor health, manage appointments, and store documents securely, promoting proactive health management.',
    image: pillping,
    source_code_link: 'https://github.com/SridharDigital/YuzoMart',
    live_website_link: '#',
  },
]

export { services, technologies, experiences, testimonials, projects }
