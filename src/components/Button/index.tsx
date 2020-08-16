import React from 'react';

export const Button = (props: ButtonProps) => {
	const { text } = props;

	return (
		<button className='h-12 bg-zeal hover:bg-green-500 py-2 px-3 text-white font-medium border border-solid rounded-lg shadow whitespace-no-wrap'>
			{text}
		</button>
	);
};
