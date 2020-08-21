import React from 'react';

export const Textarea = (props: InputProps) => {
	const { placeholder, id, message } = props;

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{id}
			</label>
			<textarea
				id={id}
				rows={8}
				className='resize-y w-full p-2 pl-4 rounded-lg leading-tight'
				placeholder={placeholder}
			/>
			{message && <p className='font-light text-white'>{message}</p>}
		</>
	);
};
