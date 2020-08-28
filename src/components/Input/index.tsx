import React from 'react';

export const Input = (props: InputProps) => {
	const {
		placeholder,
		id,
		message,
		type,
		value,
		onChangeFn,
		onBlurFn,
	} = props;

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{id}
			</label>
			<input
				value={value}
				onChange={(e) => onChangeFn(e)}
				onBlur={(e) => onBlurFn && onBlurFn(e)}
				name={id}
				id={id}
				type={type}
				className={`appearance-none w-full h-12 p-2 pl-4 rounded-lg`}
				placeholder={placeholder}
				maxLength={126}
			/>
			<p className='mx-3 font-light text-white'>{message}</p>
		</>
	);
};

Input.defaultProps = {
	type: 'text',
};
