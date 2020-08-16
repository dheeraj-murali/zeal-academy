import React from 'react';

export const Nav = () => {
	return (
		<>
			<div className='py-2 px-2'>
				<a href='#about' className='py-2 px-2'>
					About
				</a>
				<a href='#course' className='py-2 px-2'>
					Course
				</a>
				<a href='#contact' className='py-2 px-2'>
					Contact
				</a>
			</div>
			<div className='py-2 px-2 hidden md:block'>
				Questions? Call us at +91 988765432
			</div>
		</>
	);
};
