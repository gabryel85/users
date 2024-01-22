import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppContext } from '@context/AppContext';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const { searchUsers } = useAppContext();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchUsers(searchTerm);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className='flex justify-center mt-5'>
			<input
				type='text'
				className='form-input px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
				placeholder='Wyszukaj...'
				value={searchTerm}
				onChange={handleChange}
			/>
			<button
				type='submit'
				className='px-4 py-2 border-l-0 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
				Szukaj
			</button>
		</form>
	);
};

export default SearchBar;
