import { FormikHelpers, useFormik } from 'formik';
import React, { useContext } from 'react';
import { formService } from '../../utils/service/formService';
import { validate } from '../../utils/helpers/validate';
import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { AppContext } from '../../utils/context';

export const ContactForm = () => {
	const { dispatch } = useContext(AppContext);

	const {
		handleSubmit,
		errors,
		touched,
		handleBlur,
		handleChange,
		values,
		isSubmitting,
	} = useFormik<ContactFormData>({
		initialValues: { email: '', name: '', message: '' },
		validate,
		onSubmit: async (
			values,
			{ setSubmitting }: FormikHelpers<ContactFormData>
		) => {
			const response = await formService(values);
			setSubmitting(false);
			if (response === 'success') {
				dispatch({
					type: 'SHOW_ALERT',
					payload: {
						title: 'Message send successfully!',
						message: `We'll get back to you shortly.`,
						type: 'success',
					},
				});
			}

			if (response === 'error') {
				dispatch({
					type: 'SHOW_ALERT',
					payload: {
						title: 'Something went wrong!',
						message: `Please try again after some time.`,
						type: 'error',
					},
				});
			}
		},
	});

	return (
		<div className='flex flex-col flex-start text-center md:text-left space-y-8 w-full md:w-1/2 mx-auto'>
			<form
				className='w-full max-w-lg'
				onSubmit={(e) => {
					console.log('submitting');
					handleSubmit(e);
				}}
			>
				<div className='w-full mb-6'>
					<Input
						placeholder='Your email address'
						id='email'
						type='email'
						message={
							errors.email && touched.email
								? errors.email
								: 'We’ll never share your email with anyone.'
						}
						value={values.email}
						onChangeFn={handleChange}
						onBlurFn={handleBlur}
					/>
				</div>

				<div className='w-full mb-6'>
					<Input
						placeholder='Your name'
						id='name'
						value={values.name}
						onChangeFn={handleChange}
						onBlurFn={handleBlur}
						message={errors.name && touched.name ? errors.name : ''}
					/>
				</div>

				<div className='w-full mb-6'>
					<Textarea
						id='message'
						placeholder='Message'
						value={values.message}
						onChangeFn={handleChange}
						onBlurFn={handleBlur}
						message={
							errors.message && touched.message
								? errors.message
								: ''
						}
					/>
				</div>

				<div className='flex justify-center w-full mb-6'>
					<Button
						text='send email'
						isDisabled={isSubmitting}
						loader={isSubmitting}
					/>
				</div>
			</form>
		</div>
	);
};
