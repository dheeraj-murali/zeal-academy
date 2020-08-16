import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

export const InputGroup = () => {
	return (
		<div className='flex flex-col w-auto max-w-md space-y-2'>
			<div className='flex justify-between bg-white rounded-lg overflow-hidden border border-solid  border-1 shadow-lg'>
				<Input />
				<Button />
			</div>
			<p className='pl-3 text-white'>
				Drop your email above, we'll get back to you right away
			</p>
		</div>
	);
};
