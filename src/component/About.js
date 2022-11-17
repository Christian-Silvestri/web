import develhope from '../assets/CertificatoDevelhope2M.png';
import vallauri from '../assets/vallauri2.png';
import { motion } from 'framer-motion'



function About() {

  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,

        type: 'spring',
        ease: 'linear'
      }
    }
  }

  const animationEdu = {
    hidden: {
      opacity: 0,
      x: -600
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: 'easeInOut'
      }
    }
  }

  const animationTra = {
    hidden: {
      opacity: 0,
      x: +600
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='px-2 md:px-8 lg:px-12 xl:px-24 2xl:px-60 md:space-y-24 lg:space-y-0'>
      <div className='    lg:flex flex-col lg:justify-between md:space-y-24 lg:space-y-0'>
        <motion.div initial='hidden' whileInView={'visible'} viewport={{ once: true, amount: 0.3 }} variants={animation} className='ABOUT lg:flex items-center gap-24 h-screen '>
          <div className='TITLE lg:w-1/2 lg:text-right'>
            <h1 className=''>about<br /> me</h1>
          </div>
          <div className='PARA lg:w-1/2 md:w-4/5'>
            <p>
              My name is Christian Silvestri, I'm a Junior Full-Stack developer based in Rome.
              Great lover of Music, Art and Astrophysics.
              After working for years in the world of large-scale distribution and logistics, I decided to change my life by dedicating myself to
              my greatest passion, web development, and luckily it turned out to be a wonderful decision.
              Thanks to my work experiences I have acquired great skills in Problem Solving and a strong propensity to work in a team.
              I use my passion and skills to create digital products and experences with high attention to detail.
              you're looking for a developer to add to your team I'd love to hear from you.
            </p>
          </div>
        </motion.div>
        <motion.div initial='hidden' whileInView={'visible'} variants={animation} viewport={{ once: true, amount: 0.7 }} className='CARRER flex flex-col lg:flex-row lg:items-center lg:gap-24 h-screen '>
          <div className='PARA lg:w-1/2 order-2 lg:order-1 md:w-4/5'>
            <p>
              Full Stack graduate with a passion for developing scalable web applications and working across the full stack, to build complete web
              applications including frontend, backend, and database management.
              Creating solutions to clients' website needs seeking employment at SmartWeb where I can combine my experience in building web portals,
              applications and ecommerce websites to bring unique attributes to the organization.
              I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people
              “richer, smarter and happier.
            </p>
          </div>
          <div className='TITLE lg:w-1/2 lg:text-righ order-1 lg:order-2'>
            <h1>carrer<br /> objective</h1>
          </div>

        </motion.div>
      </div>

      <motion.div layout className='w-full h-full  lg:pt-60'>
        <motion.div initial='hidden' whileInView={'visible'} viewport={{ once: true, amount: 0.5 }} variants={animation} className='lg:flex w-full justify-between gap-4'>
          <h2>education</h2>
          <h2 className='text-5xl lg:hidden'>and</h2>
          <h2>training</h2>
        </motion.div>
        <motion.div initial='hidden' whileInView={'visible'} viewport={{ once: true, amount: 0.5 }}  className='md:w-4/5 lg:flex lg:w-full gap-24 xl:gap-36 2xl:gap-48 '>
          <motion.div variants={animationEdu} className='lg:w-1/2 pt-6 lg:pt-0 lg:text-justify'>
            <h3 className='uppercase text-xl text-rose-200'>ITIS - GIANCARLO VALLAURI</h3>
            <p>Graduates in Computer Science and Telecommunications have specific skills in the field of information
              systems, information processing, Web applications and technologies, networks and communication equipment;
              has skills and knowledge that address the analysis, design, installation and management of computer systems,
              databases, networks of processing systems and multimedia systems</p>
          </motion.div>
          <motion.div  variants={animationTra} className='lg:w-1/2 pt-6 lg:pt-0  lg:text-justify'>
            <h3 className='uppercase text-xl lg:text-right text-rose-200'>DEVELHOPE - FullStack Web Developer Course</h3>
            <p>
              During the 8 months of Develhope course I learned development FullStack, with HTML, CSS, JAVASCRIPT, REACT and
              NODE, to use Git and I acquired the skills needed on TypeScript.
              In the second part I explored all the elements essential to developing software and I have developed a
              true web application with agile methodologies
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}




export default About