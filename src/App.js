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





function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])


  return (
    <>
      <div className="bg-zinc-800 text-white ">

         {isLoading ?
          <Loader />
          :

          <>
            <About />
            <Skills />
            <Contact />
          </>

        }
       {/*  <Loader /> */}

      </div>
    </>

  );
}



export default App;
