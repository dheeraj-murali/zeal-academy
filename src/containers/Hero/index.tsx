import React from 'react';
import { InputGroup } from '../../components';
import { hero } from '../../images';

export const Hero = () => {
	return (
		<div
			className='h-screen w-screen bg-fixed bg-no-repeat bg-cover'
			style={{ backgroundImage: `url(${hero})` }}
		>
			<div className='flex flex-col h-screen w-screen justify-center px-8 md:px-24 lg:px-32'>
				<h1 className='text-white my-8 text-3xl md:text-4xl lg:text-5xl'>
					Learn from the best, <br />
					Turn your dreams into reality.
				</h1>
				<InputGroup message='Drop your email above, well get back to you right away.' />
			</div>
		</div>
	);
};
