import { LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';
import { icon } from '../api/db';

function Skills() {
  return (
    <>
      <SkillsList />
    </>
  )
}
const Button = (props) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const style = {
    icon: {
      text: 'text-rose-500/90',
    },
    name: {
      text: 'text-2xl text-center uppercase text-gray-200 font-para',
      shadow: { textShadow: '2px 2px 2px gray' }
    },
    content: {
      text: 'text-lg text-blue-100/70 leading-none font-para'
    },
    button: 'bg-zinc-800/80  border-l border-gray-600 rounded-lg shadow-md shadow-gray-500',
    caret: 'text-gray-400 ',
    link: 'font-bold text-sm text-rose-500/70 text-right uppercase'
  };



  return (
    <div onClick={handleShow} className={`${show && 'flex-col'} ${style.button} px-4 py-2 flex cursor-default`}>
      <div className={`${show && 'justify-between'} w-full flex items-center`}>
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
        <h1 className={`${style.link} pt-2`}>{props.link}</h1>
      </span>
    </div>
  )
}




const SkillsList = () => {

  return (
    <div className='space-y-3'>
      {icon.map((icon) => <Button icon={icon.icon} name={icon.name} content={icon.content} link={icon.link} key={icon.id} />)}
    </div>
  )
}

export default Skills;






