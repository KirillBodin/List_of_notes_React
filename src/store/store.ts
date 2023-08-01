import { configureStore, combineReducers } from '@reduxjs/toolkit';
import notesReducer from '../reducers/notesReducer';
import dialogReducer from '../reducers/dialogReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  dialog: dialogReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
