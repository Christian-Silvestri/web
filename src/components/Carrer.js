import develhope from '../assets/CertificatoDevelhope2M.png';
import vallauri from '../assets/vallauri2.png'


function Carrer() {

  return (
    <>
      <About />
    </>
  )
}



const About = () => {



  return (
    <section className="h-full w-full flex flex-col gap-48">
      <div>
        <div className='pb-8'>
          <h1 className='title textShadow' >who i am</h1>
        </div>
        <div>
          <p className="para">
            My name is Christian Silvestri, I'm a Junior Full-Stack developer based in Rome.<br />
            Great lover of Music, Art and Astrophysics.<br /><br />
            After working for years in the world of large-scale distribution and logistics, I decided to change my life by dedicating myself to
            my greatest passion, web development, and luckily it turned out to be a wonderful decision.<br /><br />
            Thanks to my work experiences I have acquired great skills in Problem Solving and a strong propensity to work in a team.<br />
            I use my passion and skills to create digital products and experences with high attention to detail.<br />
            you're looking for a developer to add to your team I'd love to hear from you.
          </p>
        </div>
      </div>
      <section>
        <div className='pb-4'>
          <h1 className="subtitle textShadow">education & training</h1>
        </div>
        <div>
          <div className="flex items-center gap-2  w-full">
            <div className='max-w-[100px]'>
              <img src={develhope} alt='Develhope' />
            </div>
            <div className='para uppercase'>
              <p className=''>DEVELHOPE - FullStack Web Developer Course</p>
            </div>
          </div>
          <p className='para'>
            During the Develhope course I learned development FullStack, with HTML, CSS, JAVASCRIPT, REACT and
            NODE, to use Git and I acquired the skills needed on TypeScript.<br/>
            In the second part I explored all the elements essential to developing software and I have developed a
            true web application with agile methodologies
          </p>
        </div>

        <div className='pt-8'>
          <div className="flex items-center gap-2  w-full">
            <div className='max-w-[100px] h-[100px] bg-white flex items-center'>
              <img src={vallauri} alt='vallauri' />
            </div>
            <div className='para uppercase'>
              <p className=''>ITIS - GIANCARLO VALLAURI</p>
            </div>
          </div>
          <p className='para'>
          Graduates in Computer Science and Telecommunications have specific skills in the field of information 
          systems, information processing, Web applications and technologies, networks and communication equipment; 
          has skills and knowledge that address the analysis, design, installation and management of computer systems, 
          databases, networks of processing systems and multimedia systems
          </p>
        </div>
      </section>

      

    </section>
  )
}



export default Carrer;