import { useState } from "react";
import LogoCS from "./components/LogoCS";
import Main from "./components/Main";
import Skills from "./components/Skills";
import FramerMotionTest from "./FramerMotionTest";
import Prova from './Prova';
import Section from "./components/Section";
import Footer from './components/Footer';
import Carrer from "./components/Carrer";

const { Layout } = Section();



function App() {


  return (
    <>
      <div>

        {/* <Prova /> */}
      <LogoCS />
        <Layout>
        
                
         <Carrer />
         <Skills/>
         <Footer/>          
        </Layout>

        {/* <LogoCS /> */}
        {/* <Main /> */}
        {/* <FramerMotionTest /> */}

      </div>
    </>

  );
}



export default App;
