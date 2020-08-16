import React from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export const Header = () => {
	return (
		<div className='absolute flex justify-around items-center z-30 w-screen h-20 text-white'>
			<Logo />
			<Nav />
		</div>
	);
};
