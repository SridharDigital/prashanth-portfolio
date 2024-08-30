import React from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'
import { ServiceCard } from './About'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const technologies = [
  {
    name: 'Figma',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773161/figma_grkmtb.png',
  },
  {
    name: 'Illustrator',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773161/Adobe-illustrator-Logo-PNG_zeevector-387x258_xgn3et.png',
  },
  {
    name: 'Photoshop',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773161/adobeps_zezln6.png',
  },
  {
    name: 'Miro',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765620/Miro_sbfpha.png',
  },
  {
    name: 'Marvel',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765620/Marvel_foz1xl.png',
  },
  {
    name: 'Maze',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765619/maze_oh4mld.png',
  },
  {
    name: 'Hotjar',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765619/hotjar_alp2oy.png',
  },
  {
    name: 'Balsamiq',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765620/balsamiq_vuogos.png',
  },
  {
    name: 'Chat GPT',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765620/communityIcon_bzj6d1z1oizc1_xnjs3j.png',
  },
  {
    name: 'Canva',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765620/Canva_dcp8kj.jpg',
  },
  {
    name: 'Claude',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765621/claudde_w8xq3m.webp',
  },
  {
    name: 'Gamma',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765619/gamma_ik7qfq.jpg',
  },
  {
    name: 'Jira',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765621/jira_ebdkce.jpg',
  },
  {
    name: 'Notion',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765621/notion_dnjqed.png',
  },
  {
    name: 'Tome AI',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724765619/imagen-tome-ai-storytelling-0ori_whpde7.webp',
  },
  {
    name: 'HTML',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773161/html_umnrt5.jpg',
  },
  {
    name: 'CSS',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773160/css_tvruk2.png',
  },
  {
    name: 'Bootstrap',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773847/Bootstrap_logo.svg_vrez8y.png',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773847/1_5QD8DKhOjRe-gcYjozlLNQ_nwsx1i.png',
  },
  {
    name: 'JavaScript',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773160/javascript_bq4jjh.jpg',
  },
  {
    name: 'React',
    icon: 'https://res.cloudinary.com/dq8bprwmt/image/upload/v1724773161/react_vfrdzd.png',
  },
]
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tools & Softwares I'm Proficient In
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
        {technologies.map((technology) => (
          <div
            className="flex flex-col justify-center w-28 h-28 my-3"
            key={technology.name}
          >
            <div className="flex flex-col justify-center items-center mb-4">
              <img src={technology.icon} className="w-20 h-20 rounded-full" />
            </div>
            <p className="text-center">{technology.name} </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'skills')
