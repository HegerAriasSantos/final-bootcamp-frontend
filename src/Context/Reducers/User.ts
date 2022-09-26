import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '~/types';

export interface UserState {
  value: User | null;
}

const initialState: UserState = {
  value: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      state.value = user != '{}' ? user : null;
    },
    deleteUser: (state: UserState) => {
      state.value = null;
      localStorage.removeItem('user');
    },
    modifyUser(state: UserState, action: PayloadAction<User>) {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, deleteUser, modifyUser } = UserSlice.actions;

export default UserSlice.reducer;
