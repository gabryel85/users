import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@redux/store';
import { fetchUsers, addUser, User } from '@redux/usersSlice';

export interface AppContextProps {
	users: User[];
	filteredUsers: User[];
	fetchUsers: () => void;
	addUser: (user: User) => void;
	searchUsers: (searchTerm: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a AppContextProvider');
	}
	return context;
};

interface AppContextProviderProps {
	children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
	const dispatch = useDispatch<AppDispatch>();
	const users = useSelector((state: RootState) => state.users.users);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

	const handleFetchUsers = () => {
		dispatch(fetchUsers());
	};

	const handleAddUser = (user: User) => {
		dispatch(addUser(user));
	};

	const handleSearchUsers = (searchTerm: string) => {
		if (!searchTerm.trim()) {
			setFilteredUsers(users);
		} else {
			const filtered = users.filter(
				user =>
					user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					user.email.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredUsers(filtered);
		}
	};

	return (
		<AppContext.Provider
			value={{
				users,
				filteredUsers,
				fetchUsers: handleFetchUsers,
				addUser: handleAddUser,
				searchUsers: handleSearchUsers,
			}}>
			{children}
		</AppContext.Provider>
	);
};
