import React from 'react';

export const Counter = (props: CounterProps) => {
	const { item } = props;

	return (
		<div>
			<h3 className='text-4xl text-green-700 font-bold subpixel-antialiased'>
				{item.count}
			</h3>
			<p className='text-gray-700 font-semibold'>{item.label}</p>
		</div>
	);
};
