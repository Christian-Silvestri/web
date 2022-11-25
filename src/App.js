import { useEffect, useState } from "react";
import LogoCS from "./component/LogoCS";
import Main from "./components/Main";
import Skills from "./component/Skills";
import FramerMotionTest from "./FramerMotionTest";
import Prova from './Prova';
import Section from "./components/Section";
import Footer from './components/Footer';
import Carrer from "./components/Carrer";
import About from "./component/About";
import Contact from "./component/Contact";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./component/Loader";



const { Layout } = Section();



function App() {

  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     setIsLoading(true);
     setTimeout(() => {
       setIsLoading(false)
     }, 5000)
   }, [])

  const animation = {
    hidden: {
      opacity: [0, 0.2, 0.5],
      scaleY: 0,

      
    },
    visible: {
      opacity: 1,
      scaleY: 1,

      transition: {
        duration: 0.5,
        delay: 1

      }
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.5
      }
    }
  }


  return (
    <>
      <div className="bg-zinc-800 text-white ">
        <AnimatePresence>
          {isLoading && (

            <div className="flex items-end  justify-center h-screen">
              <Loader />
              <motion.h1 initial={'hidden'} animate={'visible'} variants={animation} exit={'exit'} key={1} className="text-white flex flex-col pb-24 xl:pb-12">
                <span>
                  hi, i'm
                </span>
                christian silvestri
              </motion.h1>
            </div>

          )}
        </AnimatePresence>
        <>
          <About />
          <Skills />
          <Contact />
        </>



      </div>
    </>

  );
}



export default App;
