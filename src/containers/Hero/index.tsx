import React from 'react';
import { InputGroup } from '../../components';
import { hero } from '../../images';

export const Hero = () => {
	return (
		<section
			className='h-screen w-screen bg-fixed bg-no-repeat bg-cover bg-center'
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(41,216,119,0.4) 0%, rgba(51, 51, 51, 0.4) 39.84%), url(${hero})`,
			}}
		>
			<div className='flex flex-col h-screen w-screen justify-center px-8 md:px-24 lg:px-32'>
				<h1 className='text-white my-8 text-3xl md:text-4xl lg:text-5xl'>
					Learn from the best, <br />
					Turn your dreams into reality.
				</h1>
				<InputGroup
					message='Drop your email above, well get back to you right away.'
					id='join'
				/>
			</div>
		</section>
	);
};
