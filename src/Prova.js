import { AnimatePresence, delay, filterProps, motion } from 'framer-motion';
import { createRef, useEffect, useReducer, useState, React } from 'react';



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








/* function onComplete() {
  <h1>CHIAI</h1>
}



function Prova({ className }) {

  const [open, setOpen] = useState(false);

  return (

    <motion.div
      layout style={{ height: open ? '500px' : '100px' }}
      onClick={() => setOpen(!open)}
      className={`${className}`}
      transition={{ ease: 'linear', duration: 1 }}
      onAnimationComplete={onComplete}
    />
  )
}


export function Test() {
  const [open, setOpen] = useState(true)

  const anima = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'linear'
      }
    }, 
    out: {
      opacity: 0,
      transition: {
        duration: 4,
        ease: 'linear'
      },
      x: 1500
    }
  }

  const complete = () => setOpen(!open);



  return (
    <AnimatePresence>
      { open && <motion.div

        initial='hidden'
        animate='visible'
        variants={anima}
        exit='out'
        onAnimationComplete={complete}

        className='bg-teal-500 h-[100px]'>
        <h1>CIAMO FVAFSDDFLKN</h1>
      </motion.div>}
    </AnimatePresence>

  )
}

const varia = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: [100, 0],
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'linear',
      delay: 2
    }
  }
}

export function Scroll() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: false, amount: 0.5}}
    transition={{staggerChildren: 1.5}}
    className='bg-amber-400 h-[1000px]'>
      <motion.h1
      initial={{x: -500}}
      whileInView={{x:[-500, 100, 0]}}
      >ciao</motion.h1>
      <motion.h1
      
      variants={varia}>ciao</motion.h1>
      <motion.h1
      variants={varia}>ciao</motion.h1>
      <motion.h1
      variants={varia}>ciao</motion.h1>
    </motion.div>
  )
}

const imgAnimate = {
  offScreen: {x: -100, opacity: 0},
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 90, -90, 90, 0],
    bounce: 0.4,
    duration: 3
  }
}

const textAnimate = {
  offScreen: {y: -100, opacity: 0},
  onScreen: {
    y: [0, 500, 0],
    opacity: 1,
    transition: {type: 'spring'},
    bounce: 0.4,
    duration: 3
  }
}

export function Card() {
  return (
    <motion.div id='franco'
    transition={{staggerChildren: 0.5}}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{once: false, amount: 0.5}}>
      <motion.div 
      initial='offScreen'
      whileInView='onScreen'
      variants={imgAnimate}
      >
        CHRISTIAN
        </motion.div>
      <motion.h1
      variants={textAnimate}
      initial='offScreen'
      animate='onScreen'>
        SILVESTRI
        </motion.h1>
      <motion.h1
      initial='offScreen'
      animate='onScreen'
      variants={textAnimate}>paragrafo</motion.h1>
    </motion.div>
  )
}
export default Prova; */

;









/*const padding = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-8',
  xl: 'p-12',
  '2xl': 'p-48'
};

const colors = {
  sm: 'text-black',
  md: 'text-amber-400',
  lg: 'text-rose-400',
  xl: 'text-teal-500',
  '2xl': 'text-blue-500',
};

function Section({color, size, children}) {
  let colorClasses = colors[color];
  let sizeClasses = padding[size];

  return (
    <div className={`font-black ${sizeClasses} ${colorClasses}`}>
      {children}
    </div>
  )
}*/

/* const layout = {
  padding: 'p-2 sm:p-4 md:p-8 lg:p-12 xl:p-24 2xl:p-48',
  textSize: 'text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl',
  backgroundColor: 'bg-black sm:bg-teal-200 md:bg-teal-400 lg:bg-teal-600 xl:bg-teal-800 2xl:bg-teal-900'
}

function Section({ paddings, textSizes, backgroundColors, children }) {

  let paddingLayout = layout[paddings];
  let textLayout = layout[textSizes];
  let backgroundLayout = layout[backgroundColors];

  return (
    <div>
      <div className={`${paddingLayout} ${textLayout} ${backgroundLayout}`}>
        {children}
      </div>
    </div>
  )


} */

/* const padding = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-8',
  xl: 'p-12',
  '2xl': 'p-48'
};

const colors = {
  sm: 'text-black',
  md: 'text-amber-400',
  lg: 'text-rose-400',
  xl: 'text-teal-500',
  '2xl': 'text-blue-500',
};

function Sectione({ color, size, children }) {
  let colorClasses = colors[color];
  let sizeClasses = padding[size];

  return (
    <div className={`font-black ${sizeClasses} ${colorClasses}`}>
      {children}
    </div>
  )
} */


















































