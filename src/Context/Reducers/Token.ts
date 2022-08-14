import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface TokenState {
  value: string | null;
}

const initialState: TokenState = {
  value: null,
};

export const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state: TokenState) => {
      state.value = localStorage.getItem('token');
    },
    deleteToken: (state: TokenState) => {
      state.value = null;
      localStorage.removeItem('token');
    },
    modifyToken(state: TokenState, action: PayloadAction<string>) {
      state.value = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, deleteToken, modifyToken } = TokenSlice.actions;

export default TokenSlice.reducer;
