import React from 'react';

export const TeamCard = (props: TeamCardProps) => {
	const { person } = props;

	return (
		<div
			className={`flex flex-col items-center h-full bg-white rounded-lg overflow-hidden shadow-lg p-4 space-y-4 mx-4 border`}
		>
			<img
				className='h-32 w-32 rounded-full object-cover shadow'
				src={person.photo}
				alt={person.name}
			/>
			<div className='flex flex-col justify-center text-center'>
				<h2 className='text-lg font-semibold'>
					{person.name}{' '}
					<sup className='text-gray-600 text-xs font-light'>
						{person.qualification}
					</sup>
				</h2>
				<p className='text-zeal'>{person.role}</p>
				<p className='text-gray-800 font-light pt-4'>
					{person.message}
				</p>
			</div>
		</div>
	);
};
