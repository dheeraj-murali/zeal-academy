import React from 'react';
import { links } from '../../utils/config/navLinks';

export const Nav = () => {
	return (
		<>
			<div className='py-2 px-2'>
				{links.map((link, index) => (
					<a href={link.link} className='py-2 px-4 hover:text-zeal'>
						{link.text}
					</a>
				))}
			</div>
			<div className='py-2 px-2 hidden md:block'>
				Questions? Call us at +91 988765432
			</div>
		</>
	);
};
