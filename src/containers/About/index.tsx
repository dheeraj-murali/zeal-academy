import React from 'react';
import { about as config } from '../../utils/config';

export default () => {
	return (
		<section
			id='about'
			className='min-h-screen w-screen bg-no-repeat bg-cover bg-center'
			style={{
				backgroundImage: `${config.background}`,
			}}
		>
			<div className='flex flex-col min-h-screen justify-center items-center text-white space-y-8'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl'>
					{config.title}
				</h1>
				<p className='md:text-lg w-5/6 lg:w-4/6 text-center'>
					{config.text}
				</p>
			</div>
		</section>
	);
};
