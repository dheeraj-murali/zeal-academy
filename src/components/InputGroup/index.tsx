import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

export const InputGroup = (props: InputGroupProps) => {
	const { message, id } = props;

	const [input, setInput] = useState('');

	return (
		<div className='flex flex-col w-auto max-w-md space-y-2'>
			<div className='flex justify-between bg-white rounded-lg overflow-hidden border border-solid  border-1 shadow-lg'>
				<Input
					placeholder='Your email address'
					id={id}
					value={input}
					onChangeFn={setInput}
				/>
				<Button text='Join now' />
			</div>
			{message && <p className='pl-3 text-white'>{message}</p>}
		</div>
	);
};
