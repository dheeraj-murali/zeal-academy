import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const ContactList = (props: ContactListProps) => {
	const { contactList } = props;

	return (
		<ul className='flex flex-col space-y-8 text-white'>
			{contactList.map((contactItem, index) => (
				<li
					key={`${index}-contact-list`}
					className='inline-flex items-center'
				>
					{contactItem.type === 'mail' && (
						<div className='flex flex-col md:flex-row items-center w-full'>
							<FaEnvelope className='text-4xl m-3' />
							<div className='flex flex-col'>
								{contactItem.contacts.map((contact, key) => (
									<a
										className='p-3'
										href={`mailto:${contact}`}
										key={`${key}-mail`}
									>
										{contact}
									</a>
								))}
							</div>
						</div>
					)}

					{contactItem.type === 'tel' && (
						<div className='flex flex-col md:flex-row items-center w-full'>
							<FaPhoneAlt className='text-4xl m-3' />
							<div className='flex flex-col'>
								{contactItem.contacts.map((contact, key) => (
									<a
										className='p-3'
										href={`tel:${contact}`}
										key={`${key}-phone`}
									>
										{contact}
									</a>
								))}
							</div>
						</div>
					)}
				</li>
			))}
		</ul>
	);
};
