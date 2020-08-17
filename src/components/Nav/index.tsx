import React from 'react';
import { links } from '../../utils/config/navLinks';
import Link from 'react-anchor-link-smooth-scroll';

export const Nav = () => {
	return (
		<>
			<nav className='py-2 px-2'>
				<ul className='space-x-2 md:space-x-6'>
					{links.map((link, index) => (
						<li key={index} className='float-left'>
							<Link
								offset='100'
								href={link.link}
								className='text-base hover:text-zeal'
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<a
				href='tel:+91988765432'
				className='py-2 px-2 hidden md:block hover:text-zeal'
			>
				Questions? &nbsp; Call us at +91 988765432
			</a>
		</>
	);
};
