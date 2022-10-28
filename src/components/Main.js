import about from '../assets/icon/aboutT.png';
import { RiShieldCheckLine } from 'react-icons/ri'
import { BsListCheck } from 'react-icons/bs'
import { VscFileCode } from 'react-icons/vsc';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { TfiEmail } from 'react-icons/tfi';
import avatar from '../assets/avatar.png';
import collage from '../assets/collage.png';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion';

/*function Main() {

	return (
		<div className="bg-slate-800 min-w-screen max-w-screen ">
			<div className="wrapper  text-white px-2">


				<div className="title font-chisato text-6xl sm:text-8xl flex items-center justify-between xl:justify-start xl:space-x-8 py-8">
					<h1 className='text-teal-500'>ABOUT ME</h1>
					<AiOutlineUser className='border-4 border-teal-500 rounded-full' />
				</div>


				<div className='border-2 border-teal-500 sm:border-none rounded-3xl  sm:bg-transparent  '>
					
						<div className='py-4 sm:py-0  avatar sm:float-left flex justify-center border-b-2 border-teal-500 rounded-3xl sm:border-none bg-collage bg-cover bg-no-repeat sm:bg-none'>
							<img src={avatar} alt='Profile Avatar Christian Silvestri' width={160} className='border-4 rounded-[100%] border-amber-400 sm:rounded-none bg-amber-400 sm:bg-transparent sm:border-none' />
						</div>



						<div className="description px-2 py-6 sm:py-0">
							<h1 className="text-2xl sm:text-3xl font-para text-gray-400 space-y-4 text-justify lg:text-left ">
								<div>My name is Christian Silvestri, I'm a Junior Full-Stack developer based in Rome.
									Great lover of Music, Art and Astrophysics.</div>
								<div>After working for years in the world of large-scale distribution and logistics,
									I decided to change my life by dedicating myself to my greatest passion, web development,
									and luckily it turned out to be a wonderful decision.</div>
								<div>Thanks to my work experiences I have acquired great skills in Problem Solving
									and a strong propensity to work in a team.</div>
								<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
							</h1>
						</div>
					
				</div>
				<div className='collage-photo hidden sm:block'>
					<img src={collage} alt='collage art img' className='rounded-3xl ' />
				</div>

			</div>
		</div>
	)
}*/

const varia = {
	hidden: {
		x: -500,
		opacity: 1
	},
	visible: {
		opacity: 1,
		x: [-1400, 0],
		transition: {
			duration: 0.4,
			ease:'linear',
			
		}
	}
}

const text = {
	hiddeno: {
		opacity: 0
	},
	visibleo: {
		opacity: 1,
		
		transition: {
			duration: 0.9,
			ease:'linear',
			
		}
	}
} 

function Main() {
	return (
		<div className='bg-black space-y-48'>
			<div className='p-3'>
				<div>
					<h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2'>
						HELLO, I AM CHRISTIAN
					</h1>
				</div>
				<div>
					<h1 className='text-white text-xl  uppercase font-para font-black '>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</h1>
				</div>
			</div>

			<div className='p-3'>
				<motion.div className=''
				initial='hidden'
				whileInView={'visible'}
				viewport={{once: true, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				>
					<motion.h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2 text-right flex flex-col sm:block  '
					variants={varia}>
						
						<span >CAREER</span><span> OBJECTIVE</span>
					</motion.h1>
				</motion.div>
				<motion.div 
				initial='hiddeno'
				whileInView={'visibleo'}
				viewport={{once: true, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				
				>
					<motion.h1 className='text-white text-xl  uppercase font-para font-black'
					variants={text}>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</motion.h1>
				</motion.div>
			</div>


			<div className='p-3'>
				<motion.div className=''
				initial='hidden'
				whileInView={'visible'}
				viewport={{once: false, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				>
					<motion.h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2 text-right flex flex-col sm:block  '
					variants={varia}>
						
						<span >CAREER</span><span> OBJECTIVE</span>
					</motion.h1>
				</motion.div>
				<div>
					<h1 className='text-white text-xl  uppercase font-para font-black'>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</h1>
				</div>
			</div>
			<div className='p-3'>
				<div>
					<h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2'>
						HELLO, I AM CHRISTIAN
					</h1>
				</div>
				<div>
					<h1 className='text-white text-xl  uppercase font-para font-black '>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</h1>
				</div>
			</div>

			<div className='p-3'>
				<motion.div className=''
				initial='hidden'
				whileInView={'visible'}
				viewport={{once: true, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				>
					<motion.h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2 text-right flex flex-col sm:block  '
					variants={varia}>
						
						<span >CAREER</span><span> OBJECTIVE</span>
					</motion.h1>
				</motion.div>
				<motion.div 
				initial='hiddeno'
				whileInView={'visibleo'}
				viewport={{once: true, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				
				>
					<motion.h1 className='text-white text-xl  uppercase font-para font-black'
					variants={text}>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</motion.h1>
				</motion.div>
			</div>


			<div className='p-3'>
				<motion.div className=''
				initial='hidden'
				whileInView={'visible'}
				viewport={{once: false, amount: 0.9}}
				transition={{staggerChildren: 0.5}}
				>
					<motion.h1 className='font-blucobra text-teal-500 text-7xl font-black mb-2 text-right flex flex-col sm:block  '
					variants={varia}>
						
						<span >CAREER</span><span> OBJECTIVE</span>
					</motion.h1>
				</motion.div>
				<div>
					<h1 className='text-white text-xl  uppercase font-para font-black'>
						<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
						<div>After working for years in the world of large-scale distribution and logistics,
							I decided to change my life by dedicating myself to my greatest passion, web development,
							and luckily it turned out to be a wonderful decision.</div>
						<div>Thanks to my work experiences I have acquired great skills in Problem Solving
							and a strong propensity to work in a team.</div>
						<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Main