import React from 'react';
import { achievements } from '../../utils/config/achivements';
import { Counter } from '../../components';

export const Achievements = () => {
	return (
		<section
			className='flex flex-col justify-center w-screen bg-no-repeat bg-cover space-y-10 py-20'
			style={{
				backgroundImage: `linear-gradient(180deg, rgb(41, 216, 119) 0%, rgba(255,255,255,0) 100%`,
			}}
		>
			<div className='w-3/4 text-center mx-auto my-8'>
				<h2 className='text-2xl font-bold antialiased text-current'>
					Achievements
				</h2>
				<p className='text-gray-700'>
					Fusce ullamcorper penatibus tempor velit metus tempor
					pharetra. Feugiat viverra pellentesque a sit tortor.
					Consequat tincidunt dui aliquam justo elementum interdum
					arcu.
				</p>
			</div>
			<div className='w-3/4 text-center mx-auto pt-10'>
				<ul className='flex flex-wrap item-center justify-between w-full'>
					{achievements.map((item, index) => (
						<li className='p-5 flex-1' key={index}>
							<Counter item={item} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
