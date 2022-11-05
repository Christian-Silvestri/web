import { LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import Section from './Section';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiSass, SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress, SiNpm,
  SiNodedotjs, SiGit, SiTailwindcss, SiBootstrap, SiWebpack, SiGithub, SiTrello,
  SiFigma, SiAdobephotoshop, SiFramer
} from 'react-icons/si';
import { BsCaretDown } from 'react-icons/bs';


function Skills() {

  return (
    <>
      <ButtonSkillContainer />
    </>
  )
}





function ButtonSkill(props) {
  //CREATE COMPONENT FOR SHOW SKILLS LIKE BUTTON
  //Set a state variable and method for button state.
  //if SHOW is true the button will show the desription of content  
  const [show, setShow] = useState(false);
  const handleShowChange = () => setShow(!show);


  //LOW-ORDER COMPONENT
  //Icon container
  const Icon = () => <span className='text-4xl'>{props.icon}</span>;
  //Name container
  const Name = () => {
    const textShadow = { textShadow: '2px 2px 1px  gray' }
    return (
      <div className={`${show && 'hidden'} w-full flex justify-center`}>
        <h1 style={textShadow} className={`text-xl font-para font-black text-gray-300 uppercase`}>
          {props.name}
        </h1>
      </div>
    )
  }
  //Content container
  const Content = () => (
    <div className={`${!show && 'hidden'} px-4 pb-4  `}>
      <h1 className='text-gray-300/70 font-para text-lg leading-5  '>
        {props.content}
      </h1>
    </div>
  )
  //Caret-down
  const CaretDown = () => <BsCaretDown size={30} className={`${show && 'rotate-180'} w-[5%]`} />


  //styiling border for button
  const borderStyle = {
    borderWidth: '0px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: 'white',
    boxShadow: '0px 0px 5px 1px white',
  }

  return (
    <div style={borderStyle} className={` text-amber-400`} onClick={handleShowChange}>
      <div className={`${show && 'justify-between'} w-full flex items-center pl-4 pr-8 py-2`}>
        <Icon />
        <Name />
        <CaretDown />
      </div>
      <Content />
    </div>
  )
}

//Mapping the icon array 
function ButtonSkillContainer() {
  const icon = [
    {
      id: 1,
      name: 'html',
      content: `(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
      Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)`,
      icon: <SiHtml5 />
    },
    {
      id: 2,
      name: 'css',
      content: `Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. 
      CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand`,
      icon: <SiCss3 />
    },
    {
      id: 3,
      name: 'sass',
      content: `Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. 
      The aim is to make the coding process simpler and more efficient. Let's explore in more detail`,
      icon: <SiSass />
    },
    {
      id: 4,
      name: 'javascript',
      content: `JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the 
      scripting language for Web pages, but it's used in many non-browser environments as well`,
      icon: <SiJavascript />
    },
    {
      id: 5,
      name: 'typescript',
      content: `TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing 
      to the language. It is designed for the development of large applications and transpiles to JavaScript`,
      icon: <SiTypescript />
    },
    {
      id: 6,
      name: 'react',
      content: '',
      icon: <SiReact />,
    },
    {
      id: 7,
      name: 'flutter',
      content: '',
      icon: <SiFlutter />,
    },
    {
      id: 8,
      name: 'nodejs',
      content: '',
      icon: <SiNodedotjs />,
    },
    {
      id: 9,
      name: 'npm',
      content: '',
      icon: <SiNpm />,
    },
    {
      id: 10,
      name: 'git',
      content: '',
      icon: <SiGit />,
    },
    {
      id: 11,
      name: 'webpack',
      content: '',
      icon: <SiWebpack />,
    },
    {
      id: 12,
      name: 'express',
      content: '',
      icon: <SiExpress />,
    },
    {
      id: 13,
      name: 'prisma',
      content: '',
      icon: <SiPrisma />,
    },
    {
      id: 14,
      name: 'mongodb',
      content: '',
      icon: <SiMongodb />,
    },
    {
      id: 15,
      name: 'postgresql',
      content: '',
      icon: <SiPostgresql />,
    },
    {
      id: 16,
      name: 'tailwind',
      content: '',
      icon: <SiTailwindcss />,
    },
    {
      id: 17,
      name: 'bootstrap',
      content: '',
      icon: <SiBootstrap />,
    },
    {
      id: 18,
      name: 'figma',
      content: '',
      icon: <SiFigma />,
    },
    {
      id: 19,
      name: 'photoshop',
      content: '',
      icon: <SiAdobephotoshop />,
    },
    {
      id: 20,
      name: 'github',
      content: '',
      icon: <SiGithub />,
    },
    {
      id: 21,
      name: 'trello',
      content: '',
      icon: <SiTrello />,
    },
    {
      id: 22,
      name: 'framer motion',
      content: '',
      icon: <SiFramer />,
    }
  ];

  return (
    <div className='columns-1 space-y-5'>
      {icon.map((icon) => <ButtonSkill icon={icon.icon} name={icon.name} content={icon.content} key={icon.id} />)}
    </div>
  )
}



export default Skills;






