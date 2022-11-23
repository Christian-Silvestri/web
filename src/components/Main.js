import { motion } from 'framer-motion';
import { configuration } from '../config';
import LogoCS from './LogoCS';
import Section from './Section';
import Skills from './Skillso';

const { Title, Para, Layout } = Section();

function Main() {
	return (
		<Layout>
			<div className='h-full'>
			
				{/* <LogoCS/> */}
				<Skills  />
			</div>
		</Layout>
	)
}

export default Main