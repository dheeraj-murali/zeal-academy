import React from 'react';
import {
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
		</>
	);
};
