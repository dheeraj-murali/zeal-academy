import React from 'react';
import Link from 'react-anchor-link-smooth-scroll';
import { FaPhoneAlt } from 'react-icons/fa';

export const Nav = (props: NavProps) => {
	const { links, phone } = props;

	return (
		<>
			<nav className='py-2 px-2'>
				<ul className='space-x-2 md:space-x-6'>
					{links.map((link, index) => (
						<li key={`${index}-nav`} className='float-left'>
							<Link
								href={link.link}
								className='text-base hover:text-zeal'
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			{phone && (
				<>
					<a
						href={`tel:${phone}`}
						className='py-2 px-2 hidden md:block hover:text-zeal'
					>
						Questions? &nbsp; Call us at {phone}
					</a>
					<a
						href={`tel:${phone}`}
						className='py-2 px-2 md:hidden hover:text-zeal'
					>
						<FaPhoneAlt />
					</a>
				</>
			)}
		</>
	);
};
