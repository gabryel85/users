import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
}

export interface UsersState {
	users: User[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: UsersState = {
	users: [],
	status: 'idle',
	error: null,
};

// Existing fetchUsers thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch('http://localhost:3005/api/users');
	if (!response.ok) {
		throw new Error('Nie można załadować użytkowników');
	}
	return response.json();
});

// AddUserAsync thunk
export const addUserAsync = createAsyncThunk('users/addUser', async (user: User) => {
	const response = await fetch('http://localhost:3005/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
	if (!response.ok) {
		throw new Error('Nie można dodać użytkownika');
	}
	return response.json();
});

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// Reducer logic here
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Nieznany błąd';
			})
			.addCase(addUserAsync.fulfilled, (state, action) => {
				state.users.push(action.payload);
			});
	},
});

export default usersSlice.reducer;
