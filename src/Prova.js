import { AnimatePresence, delay, motion } from 'framer-motion';
import { useState } from 'react';

/* function Prova() {
  return (
    <div className='overflow-x-hidden'>
      <motion.div
        animate={{ opacity:1, x:[0, 100, 100]  }}
        transition={{type:'spring', ease: 'backInOut', duration: 3, delay:1.5 }}
        initial={{opacity:0}}
        >
        <h1>CHRISTIAN</h1>
        <h1>Gianluca</h1>
      </motion.div>
      
    </div>

  )
} */

/* const messages = [
  {id: 1,
  value: 'Christian'},
  {id: 2,
  value: 'Silvestri'},
  {id: 3,
  value: 'Full Stack'}
]

function Prova() {
  return(
    <AnimatePresence>
    {messages.map((id ) => (
      <motion.li
        key={id.id}
        animate={{ opacity: 1, x:[0, 100, 100] }}
        transition={{type:'spring', ease: 'easeOut', duration: 3}}
        initial={{ opacity: 0 }}
      >
        {id.value}
      </motion.li>
    ))}
  </AnimatePresence>
  )
}
 */


/* function Prova() {
  return (
    <motion.button
  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}
  className='bg-slate-800 text-amber-400 rounded-2xl'>Enter</motion.button>
  )
} */

/* const list = {
  visible: { opacity: 1 ,
  transition: {
    when: 'beforeChildren',
    staggerChildren: 0.3,
    
  }
},
  hidden: { opacity: 0,
  transition: {
    when: 'afterChildren'
  }}
};
const item = {
  visible: { opacity: 1, x: 100},
  hidden: { opacity: 0, x: -100},
};
function Prova() {
  return (
    <motion.ul
    initial='hidden'
    animate='visible'
    variants={list}
    >
      <motion.li variants={item}>Christian</motion.li>
      <motion.li variants={item}>Silvestri</motion.li>
      <motion.li variants={item}>Full Stack</motion.li>
      <motion.li variants={item}>Web Developer</motion.li>
    </motion.ul>
  )
} */

/* function Prova() {
  const [rotate, setRotate] = useState(false);

  return (
    <div className='bg-rose-500 w-[200px] h-[200px] flex items-center justify-center'>
      <motion.div 
      animate={{ rotate: rotate ? 360 : 0}}
      onClick={() => {
        setRotate(!rotate);
      }}
      className=''
      transition={{duration: 1, repeat: Infinity }}
      >
        <div className='bg-teal-400 w-[50px] h-[50px]'></div>
      </motion.div>
      
    </div>
  )
} */

/* function Prova() {
  const [move, setMove] = useState(false);

  return (
    <div className='flex justify-center items-center py-10'>
      <motion.div
      animate={{x: move ? 200 : -200}}
      onClick={() => setMove(!move)}
      transition={{type:'tween', duration: 3}}>
        <div className='bg-rose-400 w-[50px] h-[50px]'></div>
      </motion.div>
    </div>
  )
} */

/* const imgAnimate = {
  imgInitial: { rotate: -100 },
  imgAnimateFirst: {
    rotate: [0, 200, 0],
    x: [0, 100, 0],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
}

function Prova() {
  return (
    <div className='w-[200px] h-[200px] flex items-center justify-center'>
      <motion.div
        initial={'imgInitial'}
        animate={'imgAnimateFirst'}
        variants={imgAnimate}>
        <div className='bg-rose-400 w-[50px] h-[50px]'></div>
      </motion.div>
    </div>
  )
}
export default Prova; */


function Prova() {
  return (
    <div className='overflow-x-hidden bg-slate-800 w-screen h-screen flex items-center'>
      <motion.div  className='text-amber-400 text-9xl font-chisato'>
        
          <motion.h1>
            cHristiaN
          </motion.h1>
          <motion.h1>
            silvestri
          </motion.h1>
       
       
      

      </motion.div>

    </div>
  )
}

export default Prova;