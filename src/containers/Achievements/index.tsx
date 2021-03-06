import React from 'react';
import { Counter } from '../../components';
import { achievement as config } from '../../utils/config';

export default () => {
	return (
		<section
			className='flex flex-col justify-center w-screen bg-no-repeat bg-cover space-y-10 py-20'
			style={{
				backgroundImage: `${config.background}`,
			}}
		>
			<div className='w-3/4 text-center mx-auto my-8 space-y-8'>
				<h2 className='text-4xl font-bold antialiased text-current'>
					{config.title}
				</h2>
				{config.text && <p className='text-gray-700'>{config.text}</p>}
			</div>
			<div className='w-3/4 text-center mx-auto pt-10'>
				<ul className='flex flex-wrap items-center justify-between w-full'>
					{config.achievements.map((item, index) => (
						<li
							className='p-5 flex-1'
							key={`${index}-achievements`}
						>
							<Counter item={item} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
