import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import UserList from '@components/UserList';
import AddUserForm from '@components/AddUserForm';
import SearchBar from '@components/SearchBar';
import { AppContextProvider } from '@context/AppContext';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<AppContextProvider>
				<div className='App'>
					<SearchBar />
					<AddUserForm />
					<UserList />
				</div>
			</AppContextProvider>
		</Provider>
	);
};

export default App;
