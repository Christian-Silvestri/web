import tr1 from '../assets/triangle/tr1.png';
import tr2 from '../assets/triangle/tr2.png'
import tr3 from '../assets/triangle/tr3.png';
import tr4 from '../assets/triangle/tr4.png'


import { motion } from 'framer-motion'




function About() {

  const paraAbout = (
    <>
      Hi, I'm Christian Silvestri,<br />Junior Full-Stack developer based in Rome.
      Great lover of Music, Art and Astrophysics.<br />
      After working for years in the world of large-scale distribution and logistics, I decided to change my life by dedicating myself to
      my greatest passion, web development, and luckily it turned out to be a wonderful decision.<br />
      Thanks to my work experiences I have acquired great skills in Problem Solving and a strong propensity to work in a team.
      I use my passion and skills to create digital products and experences with high attention to detail.<br />
      you're looking for a developer to add to your team I'd love to hear from you.
    </>
  );

  const paraCarrer = (
    <>
      Full Stack graduate with a passion for developing scalable web applications and working across the full stack, to build complete web
      applications including frontend, backend, and database management.<br />
      Creating solutions to clients' website needs seeking employment at SmartWeb where I can combine my experience in building web portals,
      applications and e-commerce websites to bring unique attributes to the organization.<br />
      I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people
      “richer, smarter and happier.
    </>
  );

  const paraEducation = (
    <>
      <span className='text-white'>
        ITIS-GIANCARLO VALLAURI.
      </span><br />
      The Graduate in Computer Science and Telecommunications has specific skills in the field of computer systems, information processing,
      Web applications and technologies, networks and communication equipment<br />
      Will have skills and knowledge related to the analysis, design, installation and management of computer systems, databases, networks
      of processing systems, multimedia systems and signal transmission and reception equipment. Has skills oriented to the management of 
      software applications:<br/> management, service oriented, for dedicated "embedded" systems. Collaborates in project management, operating 
      within the framework of regulations concerning information security and protection.
    </>
  );

  const paraTraining = (
    <>
      <span className='text-white'>
        DEVELHOPE - FULLSTACK WEB DEVELOPER COURSE.
      </span><br />
      During the 8 months of Develhope course I learned development FullStack, with HTML, CSS, JAVASCRIPT, REACT and
      NODE, to use Git and I acquired the skills needed on TypeScript.<br />
      In the second part I explored all the elements essential to developing software and I have developed a
      true web application with agile methodologies<br />
      On the server side, I learned to implement NoSQL databases using MongoDB and PostgreSQL, work within a Node.js
      environment and Express framework, and communicate to the client side through a RESTful API.<br />
      I've bought best practices to write clean, performant, and bug free code.

    </>
  )

  return (
    <div className='landscape:space-y-12 flex flex-col '>

      {/* ABOUT ME COMPONENT */}
      <InfoCard
        title={'about me'}
        para={paraAbout}
        logo={tr2}
      />

      {/* CARRER OBJECTIVE COMPONENT */}
      <InfoCard
        title={'carrer objective'}
        para={paraCarrer}
        logo={tr3}
      />

      {/* EDUCATION COMPONENT */}
      <InfoCard
        title={'education'}
        para={paraEducation}
        logo={tr1}
      />

      {/* TRAINING COMPONENT */}
      <InfoCard
        title={'training'}
        para={paraTraining}
        logo={tr4}
      />

    </div>
  )
}


function InfoCard(props) {



  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'linear',
        delay: 0.5
      }
    }
  }

  const animationTitle = {
    hidden: {
      opacity: 0,
      scaleY: 0
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
        delay: 0.5
      }
    }
  }

  const animationLogo = {
    hidden: {
      rotate: 180,
    },
    visible: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  const style = {
    display: {
      screen: ' flex items-center justify-center h-screen landscape:h-full sm:landscape:h-full sm:portrait:h-screen lg:portrait:h-screen lg:landscape:h-screen ',
      padding: ' px-4  md:px-8 lg:pl-12 xl:pl-48 2xl:pl-72 '
    },
  };




  return (

    <motion.div
      className={`${Object.values(style.display)} `}
      layout transition={{ staggerChildren: 0.9 }}
    >

      <motion.div>

        <motion.h1
          className={`pb-4 lg:pb-12 2xl:pb-24`}
          initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 1 }} variants={animationTitle}
        >
          {props.title}
        </motion.h1>

        <div className='flex items-center justify-between gap-4 md:gap-0'>
          <motion.div
            className='w-[80%] md:w-[60%] 2xl:w-[50%]'
            initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.5 }} variants={animation}
          >
            <p>
              {props.para}
            </p>
          </motion.div>
          <motion.div
            className='md:w-[40%] 2xl:w-[50%] flex justify-center'
            initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.5 }} transition={{ staggerChildren: 0.9 }}
          >
            <motion.img
              className='max-h-[80px] lg:max-h-[100px] xl:max-h-[100px] 2xl:min-h-[150px]'
              variants={animationLogo} src={props.logo} alt=''
            />
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default About