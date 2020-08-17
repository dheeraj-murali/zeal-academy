import React from 'react';
import { Logo, Nav } from '../../components';

export const Header = () => {
	return (
		<header className='absolute flex justify-around items-center z-30 w-screen h-20 text-white'>
			<Logo />
			<Nav />
		</header>
	);
};
