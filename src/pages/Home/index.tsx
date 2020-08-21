import React, { Suspense } from 'react';
import loadable, { lazy } from '@loadable/component';
import { Loader } from '../../components';

const Hero = lazy(() => import('../../containers/Hero'));
const Header = lazy(() => import('../../containers/Header'));
const Courses = loadable(() => import('../../containers/Courses'));
const Achievements = loadable(() => import('../../containers/Achievements'));
const Testimonials = loadable(() => import('../../containers/Testimonials'));
const About = loadable(() => import('../../containers/About'));
const Team = loadable(() => import('../../containers/Team'));
const Contact = loadable(() => import('../../containers/Contact'));

export const Home = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Header />
				<Hero />
			</Suspense>
			<Courses />
			<Achievements />
			<Testimonials />
			<About />
			<Team />
			<Contact />
		</>
	);
};
