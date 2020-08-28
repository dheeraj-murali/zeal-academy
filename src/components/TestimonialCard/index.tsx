import React from 'react';

export const TestimonialCard = (props: TestimonialCardProps) => {
	const { person } = props;

	return (
		<div className='flex flex-col h-full bg-white rounded-lg p-6 shadow-lg space-y-8 mx-4 border'>
			<div className='flex'>
				<img
					className='h-24 w-24 rounded-full mx-0 mr-6'
					src={person.photo}
					alt={person.name}
				/>
				<div className='flex flex-col justify-center text-left'>
					<h2 className='text-lg font-semibold'>{person.name}</h2>
					<div className='text-gray-600 font-light'>
						{person.qualification}
					</div>
					<div className='text-zeal text-sm'>{person.job}</div>
				</div>
			</div>
			<blockquote className='text-left text-gray-800 font-light'>
				<span className='text-5xl font-semibold text-gray-500 leading-3'>
					&#8220;
				</span>
				{person.message}
			</blockquote>
		</div>
	);
};
