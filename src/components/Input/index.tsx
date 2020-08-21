import React from 'react';

export const Input = (props: InputProps) => {
	const { placeholder, id, message, type } = props;

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{id}
			</label>
			<input
				name={id}
				id={id}
				type={type}
				className='appearance-none w-full h-12 p-2 pl-4 rounded-lg'
				placeholder={placeholder}
			/>
			{message && <p className='mx-3 font-light text-white'>{message}</p>}
		</>
	);
};

Input.defaultProps = {
	type: 'text',
};
