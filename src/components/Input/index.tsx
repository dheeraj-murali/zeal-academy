import React from 'react';

export const Input = (props: InputProps) => {
	const { placeholder, id } = props;

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{id}
			</label>
			<input
				id={id}
				type='text'
				className='w-full h-12 p-2 pl-4 rounded-lg'
				placeholder={placeholder}
			/>
		</>
	);
};
