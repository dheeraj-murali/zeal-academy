import React, { useState } from 'react';
import { FaInfoCircle, FaWindowClose } from 'react-icons/fa';

export const Alert = () => {
	const [showAlert, setShowAlert] = useState(true);

	if (showAlert)
		return (
			<div
				className='fixed bottom-0 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md z-50 w-full'
				role='alert'
			>
				<div className='flex'>
					<div className='py-1'>
						<FaInfoCircle className='fill-current h-6 w-6 text-teal-500 mr-4' />
					</div>
					<div className='flex-grow mr-10'>
						<p className='font-bold'>
							Our privacy policy has changed
						</p>
						<p className='text-sm'>
							Make sure you know how these changes affect you.
						</p>
					</div>
					<div className='py-1'>
						<FaWindowClose
							className='cursor-pointer fill-current h-6 w-6 text-red-400 hover:text-red-700'
							onClick={() => setShowAlert(false)}
						/>
					</div>
				</div>
			</div>
		);

	return null;
};
