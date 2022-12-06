import { useRef} from 'react';
import { motion } from 'framer-motion';
/* import { socialIcons } from '../api/db'; */
import { GoLocation } from 'react-icons/go';

import { SiMinutemailer } from 'react-icons/si';
import avatar from '../assets/avatar.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { VscMail } from 'react-icons/vsc';
import { BsTelephone } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';





function Contact() {


  return (
    <div className='w-full h-full pb-24'>
      <div className='px-4  md:px-8 lg:px-12 xl:px-24 2xl:px-48 '>

        <div className='space-y-6 pt-80 md:pt-12 lg:pt-72 pb-4 lg:pb-12 2xl:pb-36'>
          <h1>contact</h1>
        </div>

        <div className='md:flex md:py-8 md:gap-8 md:justify-between 2xl:justify-start'>
          <div className='flex md:flex-col md:gap-4 justify-around md:justify-start  md:py-0 py-8   '>
            <ButtonSocial />
          </div>
          <div className=' 2xl:max-w-[600px]'>
            <EmailContactForm />
          </div>
        </div>
      </div>
      <div className='mt-48'>
        <LocationInfo />
      </div>
    </div>
  )
}









function ButtonSocial() {

  const socialIcons = [
    {
      id: 1,
      name: 'github',
      icon: <SlSocialGithub size={35} />,
      link: 'https://github.com/Christian-Silvestri',
      alt: 'Christian Silvestri GitHub',
      linkDescription: <>github.com/christian-silvestri<FiExternalLink className='text-rose-500' /></>,
    },
    {
      id: 2,
      name: 'linkedin',
      icon: <SlSocialLinkedin size={35} />,
      link: 'https://www.linkedin.com/in/christian-silvestri/',
      alt: 'Christian Silvestri LinkedIn',
      linkDescription: <>linkedin.com/in/christian-silvestri<FiExternalLink className='text-rose-500' /></>
    },
    {
      id: 3,
      name: 'mail',
      icon: <VscMail size={35} />,
      link: 'mailto:christiansilvestri@live.it',
      alt: 'Send email to Christian Silvestri',
      linkDescription: <>christiansilvestri@live.it<FiExternalLink className='text-rose-500' /></>
    },
    {
      id: 4,
      name: 'phone',
      icon: <BsTelephone size={35} />,
      link: 'tel:3289539919',
      alt: 'Christian Silvestri phone number',
      linkDescription: <>+39 3289539919<FiExternalLink className='text-rose-500' /></>
    }
  ];



  const Button = (props) => {

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

    return (
      <div className='w-min'>
        <a href={props.link} alt={props.alt} target='_blank' rel="noreferrer" className='w-fit'>
          <motion.div
            whileHover={'initial'}
            whileTap={'animate'}
            variants={animationButton}
            className='p-4 w-max button-border-social rounded-full bg-zinc-600/20 '
          >
            {props.icon}
          </motion.div >
        </a>
      </div>
    )

  };


  return socialIcons.map((icon) =>
    <div key={icon.id}>
      <Button icon={icon.icon} link={icon.link} alt={icon.alt} />
    </div>)




}









const LocationInfo = () => {
  return (
    <div className='text-center'>
      <div className='flex items-center justify-center mt-24'>
        <GoLocation size={20} className='text-rose-600 order-2' />
        <div>
          <div className='text-gray-600 font-semibold tracking-tight leading-5 order-1 text-center '>
            Via Ugo La Malfa, 5<br />
            Genzano Di Roma - 00045<br />
            Roma - 00118/00199 - UTC+1 ITALIA
          </div>
        </div>

      </div>
      <span className='text-gray-600 font-semibold tracking-tight leading-5'>
        Copyright © CHRISTIAN SILVESTRI All right reserved
      </span>
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
        toast.error('an error has occurred!!! Please check the entered data ', { position: toast.POSITION.TOP_CENTER })
      })

    form.current.reset();
  };


  const Input = (props, { className }) => {

    const type = props.type;
    const name = props.name;
    const placeholder = props.placeholder;

    const style = 'text-gray-300 min-h-[45px] bg-transparent button-border rounded-md';
    return <input type={type} name={name} placeholder={placeholder} className={`${style} ${className} px-1 w-full`} required />
  }

  const TextArea = (props, { className }) => {

    const name = props.name;
    const placeholder = props.placeholder;

    const style = 'text-gray-300 bg-transparent button-border rounded-md';
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
        <motion.button whileHover={'initial'} whileTap={'animate'} variants={animation} type='submit' className={`${style.button} w-fit  justify-center flex items-center gap-2`}>
          <SiMinutemailer size={45} className={style.icon} />
          <span className={`${style.text}`}>send a message</span>
        </motion.button>
        <ToastContainer />
      </>
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='w-full  text-center font-para'>
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


export default Contact;