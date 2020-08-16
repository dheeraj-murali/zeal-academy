import React from 'react';

export const CourseCard = (props: CourseCardProps) => {
	const { course } = props;
	return (
		<div
			className='min-w-full mx-4 rounded-lg border border-gray-400 overflow-hidden shadow-lg bg-white'
			// style={{ minWidth: '24rem' }}
		>
			<img
				className='w-full'
				src={course.image}
				alt='Sunset in the mountains'
			/>
			<div className='space-y-3 px-6 py-4'>
				<p className='text-blue-700 text-sm'>{course.span}</p>
				<div className='font-semibold text-xl mb-2'>{course.title}</div>
				<p className='text-gray-700 text-base'>{course.description}</p>
			</div>
		</div>
	);
};
