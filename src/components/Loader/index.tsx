import React from 'react';

export const Loader = () => (
	<div className='flex items-center justify-center h-screen w-screen p-10 no-scroll-bar'>
		<div className='animate-ping flex items-center justify-center h-12 w-12 rounded-full bg-green-300'>
			<div className='h-5 w-5 rounded-full bg-zeal' />
		</div>
	</div>
);
