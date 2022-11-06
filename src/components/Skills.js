import { LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { 
  SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress, 
  SiNodedotjs, SiTailwindcss, SiWebpack, SiFigma, SiFramer
} from 'react-icons/si';
import { BsCaretDown } from 'react-icons/bs';
import { TbBrandCss3, TbBrandGit, TbBrandBootstrap, TbBrandHtml5 } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';
import { IoLogoNpm } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc';
import { CgTrello } from 'react-icons/cg';
import { ImLoop2 } from 'react-icons/im';




function Skills() {

  return (
    <>
    <div className='bg-zinc-900 space-y-3 p-2'>
      <SkillsList />
      </div>
    </>
  )
}





function Button(props) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const style = {
    icon: {
      text: 'text-rose-500/90',
    },
    name: {
      text: 'text-2xl text-center uppercase text-gray-200 font-para',
      shadow: {textShadow: '2px 2px 2px gray'}
    },
    content: {
      text: 'text-lg text-blue-100/70 leading-none font-para'
    },
    button: 'bg-zinc-700/40  border-l border-gray-600 rounded-lg shadow-md shadow-gray-500',
    caret: 'text-gray-400 '
  }

  return (
    <div onClick={handleShow} className={`${show && 'flex-col'} ${style.button} px-4 py-2 flex`}>
      <div className='w-full flex items-center'>
        <span className={`${style.icon.text} grow-[1]`} >
          {props.icon}
        </span>
        <span className={`${style.name.text} grow-[3] w-full`} style={style.name.shadow}>
          {props.name}
        </span>
        <span className={` ${style.caret} grow-[1]`} >
          <BsCaretDown size={20} className={`${show && 'rotate-180'}`} />
        </span>
      </div>
      <span className={`${show ? 'visible' : 'hidden'} ${style.content.text} py-4 w-full`}>
        {props.content}
        <br />
       <h1 className='uppercase text-right pt-4 text-sm text-rose-500/70 font-bold'>{props.link}</h1>
      </span>
    </div>
  )
}




function SkillsList() {
  const icon = [
    {
      id: 1,
      name: 'html',
      content: `HyperText Markup Language is the code that is used to structure a web page and its content. For example, content could be 
      structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article 
      will give you a basic understanding of HTML and its functions.
      HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, 
      or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or 
      image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.`,
      icon: <TbBrandHtml5 size={35} />,
      link: <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' alt='html home page'>view more</a>
    },
    {
      id: 2,
      name: 'css',
      content: `Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. 
      CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand`,
      icon: <TbBrandCss3  size={35} />
    },
    {
      id: 3,
      name: 'sass',
      content: `Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. 
      The aim is to make the coding process simpler and more efficient. Let's explore in more detail`,
      icon: <FaSass size={35} />
    },
    {
      id: 4,
      name: 'javascript',
      content: `JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the 
      scripting language for Web pages, but it's used in many non-browser environments as well`,
      icon: <h1 className='uppercase text-rose-500/90 font-semibold text-3xl tracking-wide'>j<span className='text-xl'>s</span></h1>
    },
    {
      id: 5,
      name: 'typescript',
      content: `TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing 
      to the language. It is designed for the development of large applications and transpiles to JavaScript`,
      icon: <h1 className='uppercase text-rose-500/90 font-semibold text-3xl tracking-tighter'>t<span className='text-xl'>s</span></h1>
    },
    {
      id: 6,
      name: 'react',
      content: '',
      icon: <SiReact size={35} />,
    },
    {
      id: 7,
      name: 'flutter',
      content: '',
      icon: <SiFlutter size={35} />,
    },
    {
      id: 8,
      name: 'nodejs',
      content: '',
      icon: <SiNodedotjs size={35} />,
    },
    {
      id: 9,
      name: 'npm',
      content: '',
      icon: <IoLogoNpm size={35} />,
    },
    {
      id: 10,
      name: 'git',
      content: '',
      icon: <TbBrandGit size={35} />,
    },
    {
      id: 11,
      name: 'webpack',
      content: '',
      icon: <SiWebpack size={35} />,
    },
    {
      id: 12,
      name: 'express',
      content: '',
      icon: <SiExpress size={35} />,
    },
    {
      id: 13,
      name: 'prisma',
      content: '',
      icon: <SiPrisma size={35} />,
    },
    {
      id: 14,
      name: 'mongodb',
      content: '',
      icon: <SiMongodb size={35} />,
    },
    {
      id: 15,
      name: 'postgresql',
      content: '',
      icon: <SiPostgresql size={35} />,
    },
    {
      id: 16,
      name: 'tailwind',
      content: '',
      icon: <SiTailwindcss size={35} />,
    },
    {
      id: 17,
      name: 'bootstrap',
      content: '',
      icon: <TbBrandBootstrap size={35} />,
    },
    {
      id: 18,
      name: 'framer motion',
      content: '',
      icon: <SiFramer size={35} />,
    },
    {
      id: 19,
      name: 'figma',
      content: '',
      icon: <SiFigma size={35} />,
    },
    {
      id: 20,
      name: 'photoshop',
      content: '',
      icon: <h1 className='uppercase text-rose-500/90 font-semibold text-3xl tracking-tighter'>p<span className='text-xl'>s</span></h1>,
    },
    {
      id: 21,
      name: 'github',
      content: '',
      icon: <VscGithub size={35} />,
    },
    {
      id: 22,
      name: 'trello',
      content: '',
      icon: <CgTrello size={35} />,
    },
    
    {
      id: 23,
      name: 'agile',
      content: '',
      icon: <ImLoop2 size={30} />,
    },
  ];
  return (
    <>
      {icon.map((icon) => <Button icon={icon.icon} name={icon.name} content={icon.content} link={icon.link} key={icon.id} />)}
    </>
  )
}

export default Skills;






