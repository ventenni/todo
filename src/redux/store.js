import { configureStore } from '@reduxjs/toolkit';
import reminderReducer from './todoSlice';

export default configureStore({ reducer: { reminder: reminderReducer } });
