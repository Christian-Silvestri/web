import { useState } from 'react';
import { icon } from '../api/db';
import { motion } from 'framer-motion';
import { BsCaretDown } from 'react-icons/bs';




function Skills() {



  return (
    <div className='space-y-6 pt-48 md:pt-12 lg:pt-48 pb-4 lg:pb-12 2xl:pb-36 '>
      <h1 className='px-4  md:px-8 lg:pl-12 xl:pl-24 2xl:pl-48 lg:pb-8  '>skills</h1>
      <div className='px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-48'>
        <div className='hidden xl:flex flex-wrap justify-between '>
          <SkillsCard />
        </div>
        <div className='xl:hidden'>
          <SkillsButton />
        </div>
      </div>
    </div>
  )
}








function SkillsCard() {


  const Card = (props) => {
    return (
      <div className="container ">
        <div className="wrapper">
          <div className="grid ">
            <div className=" card   xl:w-[240px] xl:h-[380px] 2xl:w-[250px] 2xl:h-[400px]">
              <div className="card-front card-inner flex items-center justify-center bg-zinc-700/10 ">
                <div className="card-content flex flex-col items-center gap-y-12 text-rose-500">
                  <span className=''>{props.icon}</span>
                  <p className='uppercase xl:text-xl 2xl:text-2xl font-para text-center'>
                    {props.name}
                  </p>
                </div>
              </div>
              <div className="card-back card-inner overflow-y-hidden pt-2 px-2 bg-zinc-700/10">
                <div className=" px-2 pt-4 text-sm overflow-y-scroll text-gray-100/80 ">
                  {props.description}
                </div>
                <div className="card-footer">
                  <div className=" uppercase">
                    {props.iconXs}
                    <div className='text-rose-500 font-semibold hover:scale-110 transition-all xl:text-sm '>{props.link}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }



  return (
    icon.map((icon) => {
      return (
        <div key={icon.id}>
          <Card name={icon.name} icon={icon.iconXl} description={icon.content} link={icon.link} />
        </div>
      )
    })
  )
}








function SkillsButton() {


  const Button = (props) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const style = {
      icon: {
        text: 'text-rose-500/90',
      },
      name: {
        text: 'text-2xl md:text-3xl  font-black text-center uppercase text-gray-200 font-para',

      },
      content: {
        text: 'text-gray-100/80 lg:text-lg  font-para3 font-black'
      },
      button: 'bg-zinc-700/10  border-l border-gray-600 rounded-lg shadow-md shadow-gray-500 lg:py-8 md:py-4',
      caret: 'text-gray-400 ',
      link: 'font-bold font-para text-md text-rose-500/70 text-right uppercase'
    };

    const animation = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'linear'
        }
      }
    }



    return (
      <motion.div
        onClick={handleShow}
        className={`${show && 'flex-col'} ${style.button} button-border px-4 py-2 w-full  cursor-default `}
      >
        <motion.div
          className={`${show && 'justify-between'} w-full h-full flex items-center `}
        >
          <span className={`${style.icon.text} grow-[1]`}
          >
            {props.icon}
          </span>
          <span className={`${style.name.text} grow-[3] w-full `} >
            {props.name}
          </span>
          <span className={` ${style.caret} grow-[1]`} >
            <BsCaretDown size={20} className={`${show && 'rotate-180'}`} />
          </span>
        </motion.div>
        <motion.span

          initial={'hidden'}
          whileInView={'visible'}
          exit={'initial'}
          transition={{ staggerChildren: 0.9 }}
          variants={animation}
          className={`${show ? 'visible' : 'hidden'} ${style.content.text} h-full pt-4  w-full flex items-center justify-center flex-col`}
        >
          {props.content}
          <br />
          <div className={`${style.link}   `}>{props.link}</div>
        </motion.span>
      </motion.div>
    )
  }

  return (
    <div className='space-y-6 '>

      {icon.map((icon) => <Button icon={icon.iconXs} name={icon.name} content={icon.content} link={icon.link} key={icon.id} />)}

    </div>
  )
}




export default Skills;