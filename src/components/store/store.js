// src/components/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducer';

export const store = configureStore({
  reducer: rootReducer,
});
export default store;