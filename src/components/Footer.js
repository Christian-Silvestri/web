import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { VscMail } from 'react-icons/vsc';
import { BsTelephone } from 'react-icons/bs';


function Footer() {
  return (
    <>
      <SocialIcon />
    </>
  )
}


const SocialIcon = () => {
  const socialIcon = [
    {
      id: 1,
      name: 'github',
      icon: <SlSocialGithub size={35} />,
      link: 'https://github.com/Christian-Silvestri',
      linkDescription: 'github.com/christian-silvestri',
    },
    {
      id: 2,
      name: 'linkedin',
      icon: <SlSocialLinkedin size={35} />,
      link: 'https://www.linkedin.com/in/christian-silvestri/',
      linkDescription: 'linkedin.com/in/christian-silvestri'
    },
    {
      id: 3,
      name: 'mail',
      icon: <VscMail size={35} />,
      link: '',
      linkDescription: 'christiansilvestri@live.it',
    },
    {
      id: 4,
      name: 'phone',
      icon: <BsTelephone size={35} />,
      link: '',
      linkDescription: '+39 3289539919'
    }
  ];


  return (
    <div className='bg-zinc-900 py-8 text-rose-500 h-screen space-y-8 '>

    {socialIcon.map((icon) => <ButtonSocial key={icon.id} icon={icon.icon} name={icon.name} link={icon.link} linkDescription={icon.linkDescription} />)}


    </div>
  )
}


function ButtonSocial(props) {
  const [show, setShow] = useState(false);

  const handleShowChange = () => setShow(!show);


  const style = {
    button: 'border-b-4 border-t border-l-2 rounded-full border-rose-600 shadow-md shadow-rose-600 text-gray-300',
    text: 'text-5xl font-blucobra text-white'
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
        duration: 0.9,
      }
    },
    exit: {
      x: 200,
      opacity: 0,
      
    }
  };

  return (
    <div className='flex w-fit gap-6 overflow-hidden'>
      <motion.div onClick={handleShowChange} whileHover={'initial'} whileTap={'animate'} variants={animationButton} className={`${style.button} p-4`} >
        {props.icon}
      </motion.div>
      <div className='flex items-center'>
        <h1 className={`${show && 'hidden'} ${style.text}`}>{props.name}</h1>
        <AnimatePresence  >
          {
            show &&
            <motion.a initial={'initial'} animate={'animate'} exit={'exit'} variants={animationLink} href={props.link} alt='Christian Silvestr Github'>{props.linkDescription}</motion.a>
          }
        </AnimatePresence>

      </div>
    </div>
  )

}


export default Footer;


