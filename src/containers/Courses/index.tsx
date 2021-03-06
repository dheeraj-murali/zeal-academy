import React, { useRef } from 'react';
import { Arrow, CourseCard, Scroll } from '../../components';
import { course as config } from '../../utils/config';
import { scroll } from '../../utils/helpers/scroll';

export default () => {
	const container = useRef<HTMLDivElement>(null!);

	return (
		<section
			id='course'
			className='flex flex-col justify-center content-center w-screen bg-scroll bg-no-repeat bg-contain bg-bottom'
			style={{ backgroundImage: `${config.background}` }}
		>
			<div className='flex flex-wrap my-10 py-10'>
				<div className='flex flex-col justify-center text-center md:text-left space-y-8 w-full md:w-2/5 pl-8 md:pl-24 pr-8 lg:px-24'>
					<h2 className='text-4xl font-bold antialiased text-current'>
						{config.title}
					</h2>

					{config.text && (
						<p className='text-gray-600'>{config.text}</p>
					)}
					<Arrow />
				</div>

				<div
					ref={container}
					className='inline-flex w-screen md:w-3/5 z-10 space-x-8 overflow-x-scroll overscroll-x-contain p-6 no-scroll-bar'
				>
					<ul className='inline-flex w-screen md:w-3/4 lg:w-2/4 space-x-2 md:space-x-6'>
						{config.courseList.map((course, index) => (
							<li key={`${index}-course`} className='min-w-full'>
								<CourseCard course={course} />
							</li>
						))}
					</ul>
				</div>

				<Scroll
					leftClickFn={() => scroll(container, 450, 'l')}
					rightClickFn={() => scroll(container, 450, 'r')}
				/>
			</div>
		</section>
	);
};
