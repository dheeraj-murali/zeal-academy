import React from 'react';
import { hero } from '../../images';

export const CourseCard = () => {
	return (
		<div
			className='rounded-lg border border-gray-400 overflow-hidden shadow-lg bg-white'
			style={{ minWidth: '20rem' }}
		>
			<img className='w-full' src={hero} alt='Sunset in the mountains' />
			<div className='space-y-3 px-6 py-4'>
				<p className='text-blue-700 text-sm'>Subject</p>
				<div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
				<p className='text-gray-700 text-base'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptatibus quia, nulla! Maiores et perferendis eaque,
					exercitationem praesentium nihil.
				</p>
			</div>
		</div>
	);
};
