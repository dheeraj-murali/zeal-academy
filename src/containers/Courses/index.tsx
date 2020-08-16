import React from 'react';
import { wave } from '../../images';
import { Arrow, CourseCard } from '../../components';

export const Courses = () => {
	return (
		<div
			className='flex flex-col justify-center content-center w-screen bg-scroll bg-no-repeat bg-contain bg-bottom'
			style={{ backgroundImage: `url(${wave})` }}
		>
			<div className='flex flex-wrap my-10 py-10'>
				<div className='flex flex-col justify-center text-center md:text-left space-y-8 w-full md:w-2/5 pl-8 md:pl-24 pr-8 lg:px-24'>
					<h2 className='text-2xl font-semibold antialiased text-current'>
						Our Popular Courses
					</h2>
					<p className='text-gray-600'>
						Elit nunc, pellentesque ante egestas. Varius diam
						tristique a consectetur sollicitudin quam mauris
						tincidunt tempor. In in rutrum sapien dolor viverra.
					</p>
					<Arrow />
				</div>
				<div className='inline-flex w-screen md:w-3/5 z-10 space-x-8 overflow-x-scroll overscroll-x-contain p-6'>
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
			</div>
		</div>
	);
};
