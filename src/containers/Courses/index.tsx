import React from 'react';
import { Arrow, CourseCard } from '../../components';
import { wave } from '../../images';
import { courseList } from '../../utils/config/courses';

export const Courses = () => {
	return (
		<section
			id='course'
			className='flex flex-col justify-center content-center w-screen bg-scroll bg-no-repeat bg-contain bg-bottom'
			style={{ backgroundImage: `url(${wave})` }}
		>
			<div className='flex flex-wrap my-10 py-10'>
				<div className='flex flex-col justify-center text-center md:text-left space-y-8 w-full md:w-2/5 pl-8 md:pl-24 pr-8 lg:px-24'>
					<h2 className='text-2xl font-bold antialiased text-current'>
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
					<ul className='inline-flex w-screen md:w-3/4 lg:w-2/4 space-x-2 md:space-x-6'>
						{courseList.map((course, index) => (
							<li key={index} className='min-w-full'>
								<CourseCard course={course} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
