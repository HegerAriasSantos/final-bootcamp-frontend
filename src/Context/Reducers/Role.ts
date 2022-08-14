import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface RoleState {
  value: number | null;
}

const initialState: RoleState = {
  value: null,
};

export const RoleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state: RoleState) => {
      state.value = Number(localStorage.getItem('role'));
    },
    deleteRole: (state: RoleState) => {
      state.value = null;
      localStorage.removeItem('role');
    },
    modifyRole(state: RoleState, action: PayloadAction<number>) {
      localStorage.setItem('role', action.payload.toString());
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRole, deleteRole, modifyRole } = RoleSlice.actions;

export default RoleSlice.reducer;
