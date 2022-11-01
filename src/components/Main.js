import { motion } from 'framer-motion';
import { configuration } from '../config';
import Skills from './Skills';



function HeroCard({ config, style, animation }) {
	return (
		<div className='py-36'>
			<motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: false, amount: 0.9 }} transition={{ staggerChildren: 0.5 }}>
				<motion.h1 variants={animation.title} className={`${style.title}`}>
					{config.title}
				</motion.h1>
			</motion.div>
			<motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: false, amount: 0.9 }} transition={{ staggerChildren: 0.5 }} >
				<motion.h1 variants={animation.para} className={`${style.para}`} >
					{config.para()}
				</motion.h1>
			</motion.div >
		</div>
	)
}


function Main() {
	return (
		<div className=' bg-zinc-900 px-4 md:px-8 lg:px-12 xl:px-48 2xl:px-96  '>
			<div>
				<HeroCard config={configuration.about} style={configuration.style} animation={configuration.animation} />
				<HeroCard config={configuration.career} style={configuration.style} animation={configuration.animation} />
				<Skills config={configuration.skills} style={configuration.style} animation={configuration.animation}/>
			</div>
		</div>
	)
}

export default Main