import React from 'react';

export const CourseCard = (props: CourseCardProps) => {
	const { course } = props;
	return (
		<div className='mx-4 rounded-lg border border-gray-400 overflow-hidden shadow-lg bg-white h-full'>
			<img
				className='w-full'
				src={course.image}
				alt={`${course.title}`}
			/>
			<div className='space-y-3 px-6 py-4'>
				<abbr
					className='text-blue-700 text-sm'
					style={{ textDecoration: 'none' }}
					title={course.title}
				>
					{course.span}
				</abbr>
				<h3 className='font-semibold text-xl mb-2'>{course.title}</h3>
				<p className='text-gray-700 text-base'>{course.description}</p>
			</div>
		</div>
	);
};
