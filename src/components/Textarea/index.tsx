import React from 'react';

export const Textarea = (props: InputProps) => {
	const { placeholder, id, message, value, onChangeFn, onBlurFn } = props;

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{id}
			</label>
			<textarea
				id={id}
				name={id}
				rows={8}
				value={value}
				onChange={(e) => onChangeFn(e)}
				onBlur={(e) => onBlurFn && onBlurFn(e)}
				className='resize-y w-full p-2 pl-4 rounded-lg leading-tight'
				placeholder={placeholder}
				maxLength={256}
			/>
			<p className='font-light text-white'>{message}</p>
		</>
	);
};
