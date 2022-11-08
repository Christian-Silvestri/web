import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { socialIcons } from '../api/db';
import { GoLocation } from 'react-icons/go';
import { BiMailSend } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import avatar from '../assets/avatar.png';
import emailjs from '@emailjs/browser';





function Footer() {
  return (
    <div className='w-full'>
      <div className='font-blucobra text-gray-300 -400/70 text-9xl mb-8' >
        CONTACT
      </div>
      <div className='flex flex-col gap-12'>
        <span>
          <SocialIcon />
        </span>
        <span>
          <EmailContactForm />
        </span>
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


const EmailContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        alert('SUCCESS ' + result);
      }, (error) => {
        alert('ERROR ' + error)
      })

    form.current.reset();
  };


  const Input = (props) => {
    const style = 'text-gray-300 min-h-[35px] bg-transparent border border-rose-500 rounded-md';
    return <input type={props.type} name={props.name} placeholder={props.placeholder} className={`${style} px-1 w-full`} />
  }

  const TextArea = (props) => {
    const style = 'text-gray-300 bg-transparent border border-rose-500 rounded-md';
    return <textarea name={props.name} placeholder={props.placeholder} className={`${style} min-h-[200px] w-full`} />
  }

  const Button = () => {
    const style = {
      button: 'border-b-4 border-t border-l-2 rounded-xl shadow-md shadow-gray-500',
      icon: 'text-rose-500',
      text: 'font-para text-3xl text-white uppercase',
    };

    return (
      <button type='submit' className={`${style.button} px-4 py-1 flex items-center gap-2`}>
        <SiMinutemailer size={45} className={style.icon} />
        <span className={`${style.text}`}>send</span>
      </button>
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='w-full py-4 text-center'>
      <div className='flex justify-between'>
        <div className='w-1/3'>
          <BiMailSend size={60} className='text-white' />
        </div>
        <div className='w-full space-y-2' >
          <Input type='text' name='firstName' placeholder='First Name' />
          <Input type='text' name='lastName' placeholder='Last Name' />
          <Input type='email' name='email' placeholder='E-mail' />
        </div>
      </div>
      <div className='pt-2'>
        <TextArea name='message' placeholder='Message...' />
      </div>
      <div className='w-full flex justify-center pt-2'>
        <Button />
      </div>
    </form>
  )
}


export default Footer;


