import { motion } from 'framer-motion';

function Section() {

  const objValues = (obj) => JSON.stringify(Object.values(obj)).replace(',', ' ').replaceAll('"', ' ');

  const Title = ({ children }) => {

    const animation = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          ease: 'linear'
        }
      }
    }

    const fontStyle = 'font-blucobra text-amber-500 font-black uppercase';
    const fontSize = 'text-9xl xl:text-10xl ';

    return (
      <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.9 }} transition={{ staggerChildren: 0.5 }}>
        <motion.div variants={animation} className={`${fontStyle} ${fontSize}`}>
          {children}
        </motion.div>
      </motion.div>
    )
  }


  const Para = ({ children }) => {

    const animation = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 5,
          ease: 'linear'
        }
      }
    }

    const fontStyle = 'font-para text-white leading-none font-black uppercase';
    const fontSize = 'text-xl lg:text-2xl xl:text-4xl';

    return (
      <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.9 }} transition={{ staggerChildren: 0.5 }}>
        <motion.div variants={animation} className={`${fontStyle} ${fontSize}`}>
          {children}
        </motion.div>
      </motion.div>
    )
  }

  const Layout = ({ children }) => {

    const style = {
      backgroundColor: 'bg-zinc-900',
      padding: 'px-4 md:px-8 lg:px-12 xl:px-48 2xl:px-96',
    };

    return (
      <div className={objValues(style)}>
        <div>
          {children}
        </div>
      </div>
    )
  }

  return { Title, Para, Layout }
}

export default Section;
