import { AnimatePresence, delay, filterProps, motion } from 'framer-motion';
import { createRef, useEffect, useReducer, useState, React } from 'react';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiSass, SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress, SiNpm,
  SiNodedotjs, SiGit, SiTailwindcss, SiBootstrap, SiWebpack, SiGithub, SiTrello,
  SiFigma, SiAdobephotoshop, SiFramer
} from 'react-icons/si';
import { BsCaretDown } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';

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





function Prova() {


  return (
    <div className='text-white bg-zinc-800 p-4 space-y-6'>
      <Buttons />
    </div>

  )
}


function Buttons() {
  const icon = [
    {
      id: 1,
      name: 'html',
      content: `(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
      Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)`,
      icon: <SiHtml5 size={35} />
    },
    {
      id: 2,
      name: 'css',
      content: `Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. 
      CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand`,
      icon: <SiCss3 size={35} />
    },
    {
      id: 3,
      name: 'sass',
      content: `Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. 
      The aim is to make the coding process simpler and more efficient. Let's explore in more detail`,
      icon: <SiSass size={35} />
    },
    {
      id: 4,
      name: 'javascript',
      content: `JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the 
      scripting language for Web pages, but it's used in many non-browser environments as well`,
      icon: <SiJavascript size={35} />
    },
    {
      id: 5,
      name: 'typescript',
      content: `TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing 
      to the language. It is designed for the development of large applications and transpiles to JavaScript`,
      icon: <SiTypescript size={35} />
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
      icon: <SiNpm size={35} />,
    },
    {
      id: 10,
      name: 'git',
      content: '',
      icon: <SiGit size={35} />,
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
      icon: <SiBootstrap size={35} />,
    },
    {
      id: 18,
      name: 'figma',
      content: '',
      icon: <SiFigma size={35} />,
    },
    {
      id: 19,
      name: 'photoshop',
      content: '',
      icon: <SiAdobephotoshop size={35} />,
    },
    {
      id: 20,
      name: 'github',
      content: '',
      icon: <SiGithub size={35} />,
    },
    {
      id: 21,
      name: 'trello',
      content: '',
      icon: <SiTrello size={35} />,
    },
    {
      id: 22,
      name: 'framer motion',
      content: '',
      icon: <SiFramer size={35} />,
    }
  ];
  return (
    <>
      {icon.map((icon) => <Button icon={icon.icon} name={icon.name} content={icon.content} key={icon.id} />)}
    </>
  )
}

function Button(props) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const style = {
    icon: {
      text: 'text-gray-100/80',
    },
    name: {
      text: 'text-3xl text-center uppercase text-rose-500/90 font-para',
      shadow: {textShadow: '1px 1px 5px rgb(244 63 94)'}
    },
    content: {
      text: 'text-lg text-blue-100/70 leading-none font-para'
    },
    button: 'bg-zinc-700/40 border-t rounded-lg shadow-md shadow-gray-400',
    caret: 'text-gray-400 border-l rounded-full shadow-md shadow-gray-600'
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
        <span className={`${style.caret}grow-[1]`} >
          <BsCaretDown size={20} />
        </span>
      </div>
      <span className={`${show ? 'visible' : 'hidden'} ${style.content.text} py-4 `}>
        {props.content}
      </span>
    </div>
  )
}










































export default Prova;