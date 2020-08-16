import React from 'react';

export const Input = (props: InputProps) => {
	const { placeholder } = props;

	return (
		<input
			type='text'
			className='w-full h-12 p-2 pl-4 rounded-lg'
			placeholder={placeholder}
		/>
	);
};
