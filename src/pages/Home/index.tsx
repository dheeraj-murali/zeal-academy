import React from 'react';
import {
	About,
	Achievements,
	Courses,
	Header,
	Hero,
	Testimonials,
} from '../../containers';

export const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Courses />
			<Achievements />
			<Testimonials />
			<About />
		</>
	);
};
