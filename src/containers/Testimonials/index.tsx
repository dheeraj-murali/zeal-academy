import React, { useRef } from 'react';
import { Arrow, TestimonialCard, Scroll } from '../../components';
import { testimonial as config } from '../../utils/config';
import { scroll } from '../../utils/helpers/scroll';

export default () => {
	const container = useRef<HTMLDivElement>(null!);

	return (
		<section
			id='course'
			className='flex flex-col justify-center content-center w-screen bg-scroll bg-no-repeat bg-contain bg-bottom'
			style={{ backgroundImage: `${config.background}` }}
		>
			<div className='flex flex-wrap my-10 py-10 space-y-10'>
				<div className='flex flex-col justify-center text-center space-y-10 w-full pl-8 md:pl-24 pr-8 lg:px-24'>
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
					className='inline-flex w-screen z-10 space-x-8 overflow-x-scroll overscroll-x-contain p-6 no-scroll-bar'
				>
					<ul className='inline-flex w-screen md:w-2/4 lg:w-2/6 space-x-2 md:space-x-10 md:ml-40'>
						{config.testimonials.map((testimonial, index) => (
							<li
								key={`${index}-testimonial`}
								className='min-w-full'
							>
								<TestimonialCard person={testimonial} />
							</li>
						))}
					</ul>
				</div>
				<Scroll
					leftClickFn={() => scroll(container, 250, 'l')}
					rightClickFn={() => scroll(container, 250, 'r')}
				/>
			</div>
		</section>
	);
};
