import { motion } from 'framer-motion';
import React from 'react';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiSass, SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress, SiNpm,
  SiNodedotjs, SiGit, SiTailwindcss, SiBootstrap, SiWebpack, SiGithub, SiTrello,
  SiFigma, SiAdobephotoshop, SiFramer
} from 'react-icons/si';


const iconsArray = [
  {
    id: 1,
    name: 'html 5',
    icon: (size, style) => <SiHtml5 className={`${size} ${style}`} />,
  },
  {
    id: 2,
    name: 'css 3',
    icon: (size, style) => <SiCss3 className={`${size} ${style}`} />,
  },
  {
    id: 3,
    name: 'sass',
    icon: (size, style) => <SiSass className={`${size} ${style}`} />
  },
  {
    id: 4,
    name: 'javasccript',
    icon: (size, style) => <SiJavascript className={`${size} ${style}`} />,
  },
  {
    id: 5,
    name: 'typescript',
    icon: (size, style) => <SiTypescript className={`${size} ${style}`} />,
  },
  {
    id: 6,
    name: 'react',
    icon: (size, style) => <SiReact className={`${size} ${style}`} />,
  },
  {
    id: 7,
    name: 'flutter',
    icon: (size, style) => <SiFlutter className={`${size} ${style}`} />,
  },
  {
    id: 8,
    name: 'nodejs',
    icon: (size, style) => <SiNodedotjs className={`${size} ${style}`} />,
  },
  {
    id: 9,
    name: 'npm',
    icon: (size, style) => <SiNpm className={`${size} ${style}`} />,
  },
  {
    id: 10,
    name: 'git',
    icon: (size, style) => <SiGit className={`${size} ${style}`} />,
  },
  {
    id: 11,
    name: 'webpack',
    icon: (size, style) => <SiWebpack className={`${size} ${style}`} />,
  },
  {
    id: 12,
    name: 'express',
    icon: (size, style) => <SiExpress className={`${size} ${style}`} />,
  },
  {
    id: 13,
    name: 'prisma',
    icon: (size, style) => <SiPrisma className={`${size} ${style}`} />,
  },
  {
    id: 14,
    name: 'mongodb',
    icon: (size, style) => <SiMongodb className={`${size} ${style}`} />,
  },
  {
    id: 15,
    name: 'postgresql',
    icon: (size, style) => <SiPostgresql className={`${size} ${style}`} />,
  },
  {
    id: 16,
    name: 'tailwind',
    icon: (size, style) => <SiTailwindcss className={`${size} ${style}`} />,
  },
  {
    id: 17,
    name: 'bootstrap',
    icon: (size, style) => <SiBootstrap className={`${size} ${style}`} />,
  },
  {
    id: 18,
    name: 'figma',
    icon: (size, style) => <SiFigma className={`${size} ${style}`} />,
  },
  {
    id: 19,
    name: 'adobe photoshop',
    icon: (size, style) => <SiAdobephotoshop className={`${size} ${style}`} />,
  },
  {
    id: 20,
    name: 'github',
    icon: (size, style) => <SiGithub className={`${size} ${style}`} />,
  },
  {
    id: 21,
    name: 'trello',
    icon: (size, style) => <SiTrello className={`${size} ${style}`} />,
  },
  {
    id: 22,
    name: 'framer motion',
    icon: (size, style) => <SiFramer className={`${size} ${style}`} />,
  }
]

function Skills({ config, style, animation }) {
  return (
    <div className=''>
      <div className=''>
        <motion.div className={`${style.title} `} initial='hidden' whileInView='visible' viewport={{ once: false, amount: 0.9 }} transition={{ staggerChildren: 0.5 }}>
          <motion.h1 variants={animation.title}>
            {config.title}
          </motion.h1>
        </motion.div>
        <div className=' '>
          <IconSkills  />
        </div>
      </div>
    </div>
  )
}


function IconSkills() {

  const iconStyle = 'text-teal-100';
  const iconSize = 'w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]';
  const textStyle = 'text-white font-para';
  const textSize = 'uppercase text-xl';
  const button = ' bg-zinc-800/70 rounded-2xl   py-2';
 
  return (
    <div className='columns-2 space-y-4'>
      {iconsArray.map((language) => {
        return (
          <div className={`flex items-center flex-col ${button}`}>
            <span key={language.id}>
              {language.icon(iconSize, iconStyle)}
            </span>
            <h1 className={`${textStyle} ${textSize}`}>
              {language.name}
            </h1>
          </div>
        )
      })}
    </div>
  )
}


export default Skills;

