import { LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import Section from './Section';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiSass, SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress, SiNpm,
  SiNodedotjs, SiGit, SiTailwindcss, SiBootstrap, SiWebpack, SiGithub, SiTrello,
  SiFigma, SiAdobephotoshop, SiFramer
} from 'react-icons/si';


function Skills() {

  const { Title } = Section();
  const icon = [
    {
      id: 1,
      name: 'html',
      content: `(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
      Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)`,
      icon: (style, ...args) => <SiHtml5 className={`${style} ${args}`} />
    },
    {
      id: 2,
      name: 'css',
      content: `Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. 
      CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand`,
      icon: (style, ...args) => <SiCss3 className={`${style} ${args}`} />
    },
    {
      id: 3,
      name: 'sass',
      content: `Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. 
      The aim is to make the coding process simpler and more efficient. Let's explore in more detail`,
      icon: (style, ...args) => <SiSass className={`${style} ${args}`} />
    },
    {
      id: 4,
      name: 'javascript',
      content: `JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the 
      scripting language for Web pages, but it's used in many non-browser environments as well`,
      icon: (style, ...args) => <SiJavascript className={`${style} ${args}`} />
    },
    {
      id: 5,
      name: 'typescript',
      content: `TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing 
      to the language. It is designed for the development of large applications and transpiles to JavaScript`,
      icon: (style, ...args) => <SiTypescript className={`${style} ${args}`} />
    },
    {
      id: 6,
      name: 'react',
      content: '',
      icon: (style, ...args) => <SiReact className={`${style} ${args}`} />,
    },
    {
      id: 7,
      name: 'flutter',
      content: '',
      icon: (style, ...args) => <SiFlutter className={`${style} ${args}`} />,
    },
    {
      id: 8,
      name: 'nodejs',
      content: '',
      icon: (style, ...args) => <SiNodedotjs className={`${style} ${args}`} />,
    },
    {
      id: 9,
      name: 'npm',
      content: '',
      icon: (style, ...args) => <SiNpm className={`${style} ${args}`} />,
    },
    {
      id: 10,
      name: 'git',
      content: '',
      icon: (style, ...args) => <SiGit className={`${style} ${args}`} />,
    },
    {
      id: 11,
      name: 'webpack',
      content: '',
      icon: (style, ...args) => <SiWebpack className={`${style} ${args}`} />,
    },
    {
      id: 12,
      name: 'express',
      content: '',
      icon: (style, ...args) => <SiExpress className={`${style} ${args}`} />,
    },
    {
      id: 13,
      name: 'prisma',
      content: '',
      icon: (style, ...args) => <SiPrisma className={`${style} ${args}`} />,
    },
    {
      id: 14,
      name: 'mongodb',
      content: '',
      icon: (style, ...args) => <SiMongodb className={`${style} ${args}`} />,
    },
    {
      id: 15,
      name: 'postgresql',
      content: '',
      icon: (style, ...args) => <SiPostgresql className={`${style} ${args}`} />,
    },
    {
      id: 16,
      name: 'tailwind',
      content: '',
      icon: (style, ...args) => <SiTailwindcss className={`${style} ${args}`} />,
    },
    {
      id: 17,
      name: 'bootstrap',
      content: '',
      icon: (style, ...args) => <SiBootstrap className={`${style} ${args}`} />,
    },
    {
      id: 18,
      name: 'figma',
      content: '',
      icon: (style, ...args) => <SiFigma className={`${style} ${args}`} />,
    },
    {
      id: 19,
      name: 'adobe photoshop',
      content: '',
      icon: (style, ...args) => <SiAdobephotoshop className={`${style} ${args}`} />,
    },
    {
      id: 20,
      name: 'github',
      content: '',
      icon: (style, ...args) => <SiGithub className={`${style} ${args}`} />,
    },
    {
      id: 21,
      name: 'trello',
      content: '',
      icon: (style, ...args) => <SiTrello className={`${style} ${args}`} />,
    },
    {
      id: 22,
      name: 'framer motion',
      content: '',
      icon: (style, ...args) => <SiFramer className={`${style} ${args}`} />,
    }
  ];

  const iconStyle = 'text-amber-400';
  const iconSize = 'w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]';


  return (
    <div>
      <div>
        <Title>
          skills
        </Title>
      </div>
      <div className='columns-2 space-y-4'>
        <LayoutGroup>
          {icon.map((value) => {
            return <SkillCard name={value.name} content={value.content} icon={value.icon(iconSize, iconStyle)} key={value.id} />
          })}
        </LayoutGroup>
      </div>
    </div>
  )
}



function SkillCard(props) {
  const [open, setOpen] = useState(false);
  const textStyle = 'text-white font-para';
  const textSize = 'uppercase text-2xl leading-none';
  const button = ' bg-zinc-800/70 rounded-2xl py-2 border-gray-400 border-2';

  return (
    <motion.div layout onClick={() => setOpen(!open)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'linear', type: 'spring' }} className={`flex items-center gap-8 px-4 ${button} ${open ? 'flex-col' : 'flex-row'}`}>
      <motion.div layout className='' >
        {props.icon}
      </motion.div>
      {!open && <h1 className={`${textSize} ${textStyle}`}>{props.name}</h1>}
      {open ? <h1 className='text-white uppercase text-xl leading-none'>{props.content}</h1> : null}
    </motion.div>
  )
}


export default Skills;

