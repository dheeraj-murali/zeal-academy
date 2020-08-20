import React from 'react';
import { about } from '../../images';

export const About = () => {
	return (
		<section
			id='about'
			className='min-h-screen w-screen bg-no-repeat bg-cover bg-center'
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(41,216,119) 0%, rgba(51, 51, 51, 0.6) 50%), url(${about})`,
			}}
		>
			<div className='flex flex-col min-h-screen justify-center items-center text-white space-y-8'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl'>About Us</h1>
				<p className='md:text-lg w-5/6 lg:w-4/6 text-center'>
					Zeal Academy is one of the emerging preeminent institution
					for pharmacy graduates who are aiming to build a healthcare
					career abroad. We are committed in nurturing dreams of
					becoming a part of healthcare foreign jobs with
					comprehensive education services. Nurturing dreams ensuring
					we continue to grow and develop our activities. We are
					committed to creating new, radical and certifying
					opportunities that helps students recognize the accurate
					path of accomplishment that helps as the springboard for
					their future career.
				</p>
			</div>
		</section>
	);
};
