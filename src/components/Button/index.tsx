import React from 'react';
import { CgSpinner } from 'react-icons/cg';

export const Button = (props: ButtonProps) => {
	const { text, isDisabled, loader } = props;

	if (isDisabled)
		return (
			<button
				disabled={isDisabled}
				type='submit'
				className='inline-flex items-center h-12 bg-zeal opacity-50 py-2 px-3 text-white font-medium border border-solid rounded-lg shadow whitespace-no-wrap cursor-not-allowed'
			>
				{loader && (
					<span className='pr-2'>
						<CgSpinner className='animate-spin text-xl' />
					</span>
				)}
				{text}
			</button>
		);

	return (
		<button
			disabled={isDisabled}
			type='submit'
			className='inline-flex items-center h-12 bg-zeal hover:bg-green-500 py-2 px-3 text-white font-medium border border-solid rounded-lg shadow whitespace-no-wrap'
		>
			{loader && (
				<span className='pr-2'>
					<CgSpinner className='animate-spin text-xl' />
				</span>
			)}
			{text}
		</button>
	);
};
