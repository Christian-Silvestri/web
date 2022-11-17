import { useState } from "react";
import LogoCS from "./component/LogoCS";
import Main from "./components/Main";
import Skills from "./components/Skills";
import FramerMotionTest from "./FramerMotionTest";
import Prova from './Prova';
import Section from "./components/Section";
import Footer from './components/Footer';
import Carrer from "./components/Carrer";
import About from "./component/About";


const { Layout } = Section();



function App() {


  return (
    <>
      <div className="bg-zinc-800 text-white ">
        {/*  <Prova /> */}
        {/* <Prova /> */}
     {/*    <LogoCS /> */}
     <LogoCS />
        <About />
        
        {/* <Layout>
        
                
         <Carrer />
         <Skills/>
         <Footer/>          
        </Layout> */}


        {/* <LogoCS /> */}
        {/* <Main /> */}
        {/* <FramerMotionTest /> */}

      </div>
    </>

  );
}



export default App;
