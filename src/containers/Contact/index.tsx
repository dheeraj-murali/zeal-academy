import React from 'react';
import { ContactForm, ContactList } from '../../components';
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
				<div className='flex flex-col flex-start space-y-24 text-center md:text-left w-full md:w-1/2 mx-auto mb-16 md:mb-0'>
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

				<ContactForm />
			</div>
		</section>
	);
};
