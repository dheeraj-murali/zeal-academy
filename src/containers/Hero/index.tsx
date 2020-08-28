import React from 'react';
import Link from 'react-anchor-link-smooth-scroll';
import { hero as config } from '../../utils/config';

export default function () {
	return (
		<section
			className='h-screen w-screen bg-fixed bg-no-repeat bg-cover bg-center'
			style={{
				backgroundImage: `${config.background}`,
			}}
		>
			<div className='flex flex-col h-screen w-screen justify-center px-8 md:px-24 lg:px-32'>
				<h1 className='text-white my-8 text-3xl md:text-4xl lg:text-5xl whitespace-pre-line'>
					{config.title}
				</h1>

				<div>
					<Link
						href='#course'
						className='inline-flex items-center h-12 bg-zeal hover:bg-green-500 py-2 px-3 text-white font-medium border border-solid rounded-lg shadow whitespace-no-wrap'
					>
						Click here to find out more
					</Link>
				</div>
			</div>
		</section>
	);
}
