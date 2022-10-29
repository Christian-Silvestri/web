import { motion } from 'framer-motion';

const animationJob = {
  hidden: {
    y: -1500
  },
  visible: {
    y: [-1500, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      type: 'spring',
    }
  }
}

const animationTest = {
  hidden: {
    x: ''
  },
  visible: {
    x: [-1200, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      type: 'spring',
    }
  },
  onExit: {
    x: [0, 1500],
    transition: {
      duration: 3,
      ease: 'linear'
    }
  }
}

function LogoCS() {

  return (
    <div className='flex justify-center bg-zinc-900'>
      <div className=' h-screen flex flex-col md:flex-row justify-center md:items-center '>
        <div className=" flex md:items-end flex-col md:flex-row space-y-8 md:space-y-0  " >
          <motion.div className='font-chisato text-teal-500  text-9xl md:text-10xl 2xl:text-11xl'
            initial={'hidden'}
            animate={'visible'}
            variants={animationTest}
            exit={'onExit'}
          >
            <h1 >CHRistian</h1>
            <h1>siLvestRi</h1>
          </motion.div>
          <motion.div className='font-blucobra text-gray-300 text-9xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                                leading-[105px] md:leading-[30px] lg:leading-[40px] xl:leading-[50px] 2xl:leading-[60px] 
                                '
            inital={'hidden'}
            animate={'visible'}
          >
            <motion.h1 className='w-min' variants={animationJob}>FULL STACK</motion.h1>
            <motion.h1 className='w-min' variants={animationJob}>WEB DEVELOPER</motion.h1>


          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoCS;


