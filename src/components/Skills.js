import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';
import { icon } from '../api/db';
import { TbBrandHtml5 } from 'react-icons/tb';


function Skills() {
  return (
    <div>
      <h1 className='title textShadow pt-48 pb-8'>skills</h1>
      <div className='lg:hidden '>
        <SkillsList />
      </div>
      <div className='hidden lg:flex flex-wrap justify-center items-center gap-8'>
        <ButtonCardList />
      </div>
    </div>
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
    button: '  border-l border-gray-600 rounded-lg shadow-md shadow-gray-500',
    caret: 'text-gray-400 ',
    link: 'font-bold text-sm text-rose-500/70 text-right uppercase'
  };



  return (
    <div   onClick={handleShow} className={`${show && 'flex-col'} ${style.button} px-4 py-2 flex cursor-default`}>
      <div  className={`${show && 'justify-between'} w-full flex items-center`}>
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
      <span  className={`${show ? 'visible' : 'hidden'} ${style.content.text} py-4 w-full`}>
        {props.content}
        <br />
        <h1 className={`${style.link} pt-2`}>{props.link}</h1>
      </span>
    </div>
  )
}

const ButtonCard = (props) => {
  const [open, setOpen] = useState(false);

  const style = {
    border: 'border-2 border-gray-500 shadow-lg shadow-gray-700',
    icon: 'text-rose-500',
    name: 'font-para text-gray-300 text-4xl text-center uppercase',
    content: 'text-gray-300 font-para leading-5'
  }


  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'linear'
      }
    },
    exit: {
      opacity: 0
    }
  };


  return (
    <motion.section layout whileHover={{ scale: 1.1 }} onHoverEnd={() => setOpen(false)} onTap={() => setOpen(!open)} className={`${style.border} h-[20rem] w-[15rem] flex flex-col items-center justify-between py-4`} >

      <LayoutGroup>
        <AnimatePresence>
          {!open ? (
            <motion.div layout initial={'hidden'} animate={'visible'} exit={'exit'} variants={animation} className='h-full w-full'>
              <div className={`${style.icon} h-[50%] flex items-center justify-center`}>
                {props.icon}
              </div>
              <div className='h-[40%]'>
                <h1 className={`${style.name} flex items-center justify-center w-full text-center h-full`}>{props.name}</h1>
              </div>
              <div className=' h-[10%] flex justify-end px-2'>
                <button className='text-rose-300 cursor-default'>VIEW MORE</button>
              </div>
            </motion.div>
          ) : (
            <motion.h1 layout initial={'hidden'} animate={'visible'} exit={'exit'} variants={animation} className={`${style.content} px-2 py-2 overflow-y-scroll`}>
              {props.content}
            </motion.h1>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.section>

  )
}

function ButtonCardList() {
  return (
    <>
      {icon.map((icon) => <ButtonCard name={icon.name} content={icon.content} key={icon.id} icon={icon.iconXl} />)}
    </>
  )
}




const SkillsList = () => {

  return (
    <div className='space-y-3 '>
      {icon.map((icon) => <Button icon={icon.iconXs} name={icon.name} content={icon.content} link={icon.link} key={icon.id} />)}
    </div>
  )
}

export default Skills;






