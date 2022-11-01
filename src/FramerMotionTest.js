import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const animation = {
  hidden: {
    opacity: 0,


  },
  visible: {
    opacity: [0, 1],
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',


    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.5,
      ease: 'easeIn',

    }
  }
}

function FramerMotionTest() {
  return (
    <>
      <Section className='bg-slate-400'>HELLO</Section>
      <Section className='bg-amber-400'>I</Section>
      <Section className='bg-rose-400'>AM</Section>
      <Section className='bg-cyan-400'>CHRISTIAN</Section>
      <Section className='bg-orange-300'>SILVESTRI</Section>
    </>
  )
}

function Section({ children, className }) {
  
  const isInView = { once: false };

  return (
    <motion.section className={`w-full h-[100vh] text-white text-4xl ${className}`} 
    initial={{opacity: 0}}
    whileInView={{opacity: 1, transition:{duration: 2}}}>
      <span style={{
        transform: isInView ? 'none' : 'ranslateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >
        {children}
      </span>
    </motion.section>
  )
}

export default FramerMotionTest;