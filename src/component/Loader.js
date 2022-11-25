import './loader.css';
import logo from '../assets/triangle/cs3.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';





function Loader() {

  const [open, setOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOpen(!open)
    },3000)
  })

  const animation = {
    hidden: {
      /*  opacity: [0, 0.2, 0.5], */
      opacity: 0,


    },
    visible: {
      /* opacity: [0, 1], */
      opacity: 1,

      transition: {
        duration: 1,
        delay: 0.5,


      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8
      }
    }
  

  }

  return (
    <div className="h-screen w-screen ">
      <div className='flex items-center justify-center flex-col w-full h-full relative'>
        <div id="loader" className='flex items-center justify-center'>

        </div>
        <AnimatePresence>
          {open && 
          <motion.img key={1} initial={'hidden'} animate={'visible'} exit={'exit'} variants={animation} src={logo} width={120} alt='' className='absolute' />
          }
          </AnimatePresence>
      </div>
    </div>
  )
}


export default Loader;