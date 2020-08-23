import React from 'react';
import { Input, Textarea, Button, ContactList } from '../../components';
import { contact as config } from '../../utils/config';

export default () => {
	return (
		<section
			id='contact'
			className='flex flex-col justify-center w-screen bg-no-repeat bg-cover space-y-10 py-20'
			style={{
				backgroundImage: `${config.background}`,
			}}
		>
			<div className='flex flex-wrap px-10 md:px-20 lg:px-32'>
				<div className='flex flex-col flex-start space-y-24 text-center md:text-left w-full md:w-1/2 mx-auto mb-8 md:mb-0'>
					<div>
						<h2 className='text-5xl font-bold antialiased text-white'>
							{config.title}
						</h2>
						<p className='text-gray-100'>{config.text}</p>
					</div>
					<div>
						<ContactList contactList={config.contactList} />
					</div>
				</div>

				<div className='flex flex-col flex-start text-center md:text-left space-y-8 w-full md:w-1/2 mx-auto'>
					<form className='w-full max-w-lg'>
						<div className='w-full mb-6'>
							<Input
								placeholder='Your email address'
								id='email'
								type='email'
								message='We’ll never share your email with anyone.'
							/>
						</div>

						<div className='w-full mb-6'>
							<Input placeholder='Your name' id='name' />
						</div>

						<div className='w-full mb-6'>
							<Textarea id='message' placeholder='Message' />
						</div>

						<div className='flex justify-center w-full mb-6'>
							<Button text='Submit' />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
