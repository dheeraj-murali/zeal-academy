import loadable, { lazy } from '@loadable/component';
import React, { Suspense } from 'react';
import { Loader, Alert } from '../../components';

const Hero = lazy(() => import('../../containers/Hero'));
const Header = lazy(() => import('../../containers/Header'));
const Courses = loadable(() => import('../../containers/Courses'));
const Achievements = loadable(() => import('../../containers/Achievements'));
const Testimonials = loadable(() => import('../../containers/Testimonials'));
const About = loadable(() => import('../../containers/About'));
const Team = loadable(() => import('../../containers/Team'));
const Contact = loadable(() => import('../../containers/Contact'));
const Footer = loadable(() => import('../../containers/Footer'));

export const Home = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Header />
				<Hero />
				<Courses />
				<Achievements />
				<Testimonials />
				<About />
				<Team />
				<Contact />
				<Footer />
			</Suspense>
			<Alert />
		</>
	);
};
