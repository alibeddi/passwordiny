import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from './passwordSlice';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: { password: passwordReducer },
});
