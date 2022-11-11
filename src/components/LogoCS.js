import { motion } from 'framer-motion';


function LogoCS() {

  const objValues = (obj) => JSON.stringify(Object.values(obj)).replace(',', ' ').replaceAll('"', ' ');

  const animationLogo = {
    hidden: {
      opacity: 0,
      x: -500
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        ease: 'linear'
      }
    }
  };

  const animationJob = {
    hidden: {
      opacity: 0,
      y: -500
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: 'linear'
      }
    }
  };

  const logoStyle = 'font-chisato text-rose-500';
  const logoSize = 'text-9xl md:text-10xl 2xl:text-11xl';
  const jobStyle = 'font-blucobra text-gray-300';
  const jobSize = {
    text: 'text-9xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl',
    leading: 'leading-[105px] md:leading-[30px] lg:leading-[40px] xl:leading-[50px] 2xl:leading-[60px]'
  }

  return (
    <div className='flex justify-center bg-zinc-900 pb-36 '>
      <div className=' h-screen flex items-center '>
        <div className=" flex md:items-end flex-col md:flex-row space-y-8 md:space-y-0" >
          <motion.div className={`${logoStyle} ${logoSize}`} initial='hidden' animate='visible' variants={animationLogo} >
            <h1>CHRistian</h1>
            <h1>siLvestRi</h1>
          </motion.div>
          <motion.div className={`${jobStyle} ${objValues(jobSize)}`} initial='hidden' animate='visible' variants={animationJob}>
            <h1 className='w-min'>FULL STACK</h1>
            <h1 className='w-min'>WEB DEVELOPER</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoCS;


