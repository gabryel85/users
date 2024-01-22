import { useEffect } from 'react';
import { useAppContext } from '@context/AppContext';

const UserList = () => {
	const { users, fetchUsers } = useAppContext();

	useEffect(() => {
		fetchUsers();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{users.map(user => (
				<div key={user.id} className='max-w-sm rounded overflow-hidden shadow-lg m-2'>
					<img className='w-full' src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.name} />
					<div className='px-6 py-4'>
						<div className='font-bold text-xl mb-2'>{user.name}</div>
						<p className='text-gray-700 text-base'>
							{user.email}
							<br />
							{user.phone}
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#{user.username}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserList;
