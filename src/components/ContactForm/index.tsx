import React, { useState } from 'react';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { Button } from '../Button';

export const ContactForm = (props: ContactFormProps) => {
	const { onSubmitFn } = props;

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		onSubmitFn(e, {
			email,
			name,
			message,
		});
	};

	return (
		<div className='flex flex-col flex-start text-center md:text-left space-y-8 w-full md:w-1/2 mx-auto'>
			<form className='w-full max-w-lg' onSubmit={handleSubmit}>
				<div className='w-full mb-6'>
					<Input
						placeholder='Your email address'
						id='email'
						type='email'
						message='We’ll never share your email with anyone.'
						value={email}
						onChangeFn={setEmail}
					/>
				</div>

				<div className='w-full mb-6'>
					<Input
						placeholder='Your name'
						id='name'
						value={name}
						onChangeFn={setName}
					/>
				</div>

				<div className='w-full mb-6'>
					<Textarea
						id='message'
						placeholder='Message'
						value={message}
						onChangeFn={setMessage}
					/>
				</div>

				<div className='flex justify-center w-full mb-6'>
					<Button text='Submit' />
				</div>
			</form>
		</div>
	);
};
