import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { socialIcons } from '../api/db';
import { GoLocation } from 'react-icons/go';
import { BiMailSend } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import avatar from '../assets/avatar.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Footer() {
  return (
    <div className='w-full'>
      <div className='font-blucobra text-white text-9xl mb-8 btn-blue 2xl:text-11xl pt-48 pb-8' >
        <h1>CONTACT</h1>
      </div>
      <div className='flex flex-col gap-12 lg:flex-row lg:justify-between '>
        <div className=''>
          <SocialIcon />
        </div>
        <div className=''>
          <div className='md:max-w-md'>
            <h1 className='uppercase  font-blucobra text-5xl text-white lg:hidden'>get in touch</h1>
            <EmailContactForm />
          </div>
          <div>

          </div>
        </div>

      </div>
      <div>
        <LocationInfo />
        <Copyright />
      </div>
    </div>
  )
}


const Copyright = () => {

  return (
    <h1>Copyright © CHRISTIAN SILVESTRI All right reserved</h1>
  )
}

const LocationInfo = () => {
  return (
    <div className='text-center'>
      <div className='flex items-center justify-center mt-24'>
        <GoLocation size={20} className='text-rose-600 order-2' />
        <div>
          <div className='text-gray-500 font-semibold tracking-tight leading-5 order-1 text-center '>
            Via Ugo La Malfa, 5<br />
            Genzano Di Roma - 00045<br />
            Roma - 00118/00199 - UTC+1 ITALIA
          </div>
        </div>

      </div>
      <span className='text-gray-500 font-semibold tracking-tight leading-5'>
        Copyright © CHRISTIAN SILVESTRI All right reserved
      </span>
    </div>
  )
}


const SocialIcon = () => {

  return (
    <div className='space-y-4 '>
      {socialIcons.map((icon) => <ButtonSocial key={icon.id} icon={icon.icon} name={icon.name} link={icon.link} linkDescription={icon.linkDescription} />)}
    </div>
  )
}






function ButtonSocial(props) {
  const [show, setShow] = useState(false);

  const handleShowChange = () => setShow(!show);



  const style = {
    button: 'border-b-4 border-t border-l-2 rounded-full border-rose-600 shadow-md shadow-rose-600 text-gray-300',
    text: 'text-2xl font-para uppercase text-zinc-200 font-black cursor-default ',
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
    <div className='flex w-full gap-4  '>
      <motion.div onClick={handleShowChange} whileHover={'initial'} whileTap={'animate'} variants={animationButton} className={`${style.button} p-4`} >
        {props.icon}
      </motion.div>
      <div className='flex items-center overflow-hidden ' onClick={handleShowChange}>
        <h1 className={`${show && 'hidden'} ${style.text}`}>{props.name}</h1>
        <AnimatePresence  >
          {
            show &&
            <motion.a className={`${style.link} flex items-center gap-2 min-w-full`} initial={'initial'} animate={'animate'} variants={animationLink} href={props.link} target='_blank' alt={props.alt} >{props.linkDescription}</motion.a>
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
        toast.success('Email send conrrectly', { position: toast.POSITION.TOP_CENTER })
      }, (error) => {
        toast.error('an error has occurred!!! Please check the entered data ', { position: toast.POSITION.TOP_CENTER})
      })

    form.current.reset();
  };


  const Input = (props, { className }) => {

    const type = props.type;
    const name = props.name;
    const placeholder = props.placeholder;

    const style = 'text-gray-300 min-h-[35px] bg-transparent border border-rose-500 rounded-md';
    return <input type={type} name={name} placeholder={placeholder} className={`${style} ${className} px-1 w-full`} required />
  }

  const TextArea = (props, { className }) => {

    const name = props.name;
    const placeholder = props.placeholder;

    const style = 'text-gray-300 bg-transparent border border-rose-500 rounded-md';
    return <textarea name={name} placeholder={placeholder} className={`${style} ${className} min-h-[200px] w-full`} />
  }

  const Button = () => {

  

    const style = {
      button: '',
      icon: 'text-rose-500',
      text: 'font-para text-2xl font-black text-white uppercase text-zinc-300',
    };
    const animation = {
      initial: { scale: 1.1 },
      animate: {
        scale: 0.9,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }
      }
    };

    return (
      <>
        <motion.button  whileHover={'initial'} whileTap={'animate'} variants={animation} type='submit' className={`${style.button} w-fit  justify-center flex items-center gap-2`}>
          <SiMinutemailer size={45} className={style.icon} />
          <span className={`${style.text}`}>send a message</span>
        </motion.button>
        <ToastContainer />
      </>
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='w-full py- text-center'>
      <div className='flex justify-between items-end'>
        <div className='w-full space-y-2' >
          <Input type='text' name='firstName' placeholder='First Name' />
          <Input type='text' name='lastName' placeholder='Last Name' />
          <Input type='email' name='email' placeholder='E-mail' />
        </div>
        <div className='max-w-min'>
          {/* <BiMailSend size={70} className='text-white' /> */}
          <img src={avatar} alt='avatar' className='rounded-lg  max-w-[105px] px-1 ' />
        </div>
      </div>
      <div className='pt-2'>
        <TextArea name='message' placeholder='Message...' />
      </div>
      <div className='w-full flex justify-center '>
        <Button />
      </div>
    </form>
  )
}


export default Footer;


