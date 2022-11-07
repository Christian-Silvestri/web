import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { socialIcons } from '../api/db';
import { GoLocation } from 'react-icons/go';
import avatar from '../assets/avatar.png';


function Footer() {
  return (
    <div className='w-full h-screen'>
      <div className='font-blucobra text-gray-300 -400/70 text-9xl mb-12' >
        CONTACT
      </div>
      <div>
        <SocialIcon />
      </div>
      <LocationInfo />
    </div>
  )
}


const LocationInfo = () => {
  return (
    <div className='flex items-center justify-between mt-24'>
      <GoLocation size={50} className='text-rose-600' />
      <div>
        <div className='text-gray-400 font-semibold tracking-tight leading-5   text-center'>
          Via Ugo La Malfa, 5<br />
          Genzano Di Roma - 00045<br />
          Roma - 00118/00199 - UTC+1 ITALIA
        </div>
      </div>
      <img src={avatar} alt='profile' width={75} className='rounded-full border-2 border-rose-600 px-2' />
    </div>
  )
}


const SocialIcon = () => {

  return (
    <div className='bg-zinc-900 space-y-4 '>
      {socialIcons.map((icon) => <ButtonSocial key={icon.id} icon={icon.icon} name={icon.name} link={icon.link} linkDescription={icon.linkDescription} />)}
    </div>
  )
}






function ButtonSocial(props) {
  const [show, setShow] = useState(false);

  const handleShowChange = () => setShow(!show);



  const style = {
    button: 'border-b-4 border-t border-l-2 rounded-full border-rose-600 shadow-md shadow-rose-600 text-gray-300',
    text: 'text-5xl font-blucobra text-white',
    link: 'text-md text-gray-300'
  };

  const animationButton = {
    initial: { scale: 1.2 },
    animate: {
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }
    }
  };

  const animationLink = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: [0.5, 1],
      transition: {
        type: 'spring',
        ease: 'easeIn',
        duration: 0.3,
      }
    },

  };


  return (
    <div className='flex w-full gap-6 '>
      <motion.div onClick={handleShowChange} whileHover={'initial'} whileTap={'animate'} variants={animationButton} className={`${style.button} p-4`} >
        {props.icon}
      </motion.div>
      <div className='flex items-center overflow-hidden w-fit'>
        <h1 className={`${show && 'hidden'} ${style.text}`}>{props.name}</h1>
        <AnimatePresence  >
          {
            show &&
            <motion.a className={`${style.link} flex items-center gap-2 min-w-full`} initial={'initial'} animate={'animate'} variants={animationLink} href={props.link} alt='Christian Silvestr Github'>{props.linkDescription}</motion.a>
          }
        </AnimatePresence>

      </div>
    </div>
  )

}


export default Footer;


