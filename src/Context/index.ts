import { configureStore } from '@reduxjs/toolkit';
import token from './Reducers/Token';
import role from './Reducers/Role';

export const store = configureStore({
  reducer: {
    token,
    role,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
