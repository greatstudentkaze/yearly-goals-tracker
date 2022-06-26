import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../index';
import { ILoginDto } from './sagas';

export interface IUser {
    id: string;
    name: string;
    email: string;
}

interface UserState {
    data: IUser | null;
    isAuthorized: boolean;
    error: string;
}

const initialState: UserState = {
    data: null,
    isAuthorized: false,
    error: '',
};

export const LOGIN = 'user/login';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.error = '';
            state.data = action.payload;
            state.isAuthorized = true;
        },
        logout: (state) => {
            state.error = '';
            state.data = null;
            state.isAuthorized = false;
        },
        authError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
})

export const { setUser, logout, authError } = userSlice.actions;
export const login = createAction<ILoginDto>(LOGIN);

export const selectUser = (state: RootState) => state.user.data;
export const selectUserId = (state: RootState) => state.user.data?.id;
export const selectIsAuthorized = (state: RootState) => state.user.isAuthorized;

export default userSlice.reducer;
