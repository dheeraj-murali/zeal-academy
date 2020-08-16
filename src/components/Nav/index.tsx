import React from 'react';
import { links } from '../../utils/config/navLinks';
import Link from 'react-anchor-link-smooth-scroll';

export const Nav = () => {
	return (
		<>
			<div className='py-2 px-2'>
				{links.map((link, index) => (
					<Link
						offset='100'
						href={link.link}
						key={index}
						className='text-base py-2 px-4 hover:text-zeal'
					>
						{link.text}
					</Link>
				))}
			</div>
			<a
				href='tel:+91988765432'
				className='py-2 px-2 hidden md:block hover:text-zeal'
			>
				Questions? &nbsp; Call us at +91 988765432
			</a>
		</>
	);
};
