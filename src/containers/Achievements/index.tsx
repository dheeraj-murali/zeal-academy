import React from 'react';
import { achievements } from '../../utils/config/achievements';
import { Counter } from '../../components';

export const Achievements = () => {
	return (
		<section
			className='flex flex-col justify-center w-screen bg-no-repeat bg-cover space-y-10 py-20'
			style={{
				backgroundImage: `linear-gradient(180deg, rgb(41, 216, 119) 0%, rgba(255,255,255,0) 100%`,
			}}
		>
			<div className='w-3/4 text-center mx-auto my-8 space-y-8'>
				<h2 className='text-4xl font-bold antialiased text-current'>
					Achievements
				</h2>
				<p className='text-gray-700'>
					Our team understands medical professionals have limited time
					and need review courses and curriculum that leads to success
					on board exams, licensure and advanced certification. We
					stand ready with tools to help you achieve your goals. Our
					team has a cent percent success record with our first batch
					passing out in flying colors.
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
