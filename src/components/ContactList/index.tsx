import React, { Fragment } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const ContactList = (props: ContactListProps) => {
	const { contactList } = props;

	return (
		<ul className='flex flex-col space-y-8 text-white'>
			{contactList.map((contactItem, index) => (
				<li className='inline-flex items-center space-x-4'>
					{contactItem.type === 'mail' && (
						<Fragment key={index}>
							<FaEnvelope className='text-4xl' />
							<div className='flex flex-col space-y-1'>
								{contactItem.contacts.map((contact, key) => (
									<a href={`mailto: ${contact}`} key={key}>
										{contact}
									</a>
								))}
							</div>
						</Fragment>
					)}

					{contactItem.type === 'tel' && (
						<Fragment key={index}>
							<FaPhoneAlt className='text-4xl' />
							<div className='flex flex-col space-y-1'>
								{contactItem.contacts.map((contact, key) => (
									<a href={`tel: ${contact}`} key={key}>
										{contact}
									</a>
								))}
							</div>
						</Fragment>
					)}
				</li>
			))}
		</ul>
	);
};
