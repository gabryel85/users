import { useAppContext } from '@context/AppContext';
import { User } from '@redux/usersSlice';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm: React.FC = () => {
	const { register, handleSubmit, reset } = useForm<User>();
	const { addUser } = useAppContext();

	const onSubmit = (data: User) => {
		addUser(data);

		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center p-4'>
			<input
				{...register('name')}
				placeholder='Imię'
				className='form-input px-4 py-2 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
			/>
			<input
				{...register('username')}
				placeholder='Nazwa użytkownika'
				className='form-input px-4 py-2 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
			/>
			<input
				{...register('email')}
				placeholder='Email'
				className='form-input px-4 py-2 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
			/>
			<input
				{...register('phone')}
				placeholder='Telefon'
				className='form-input px-4 py-2 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
			/>
			<button
				type='submit'
				className='mt-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
				Dodaj Użytkownika
			</button>
		</form>
	);
};

export default AddUserForm;
