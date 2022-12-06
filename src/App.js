import { useEffect, useState } from "react";

import Skills from "./component/Skills";

import About from "./component/About";
import Contact from "./component/Contact";

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
      

      </div>
    </>

  );
}



export default App;
