import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import {DialogState } from '../actions/interfacesReducers';


const initialState: DialogState = {
  isOpen: false,
  mode: 'create',
  noteId: '',
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<{ mode: 'create' | 'edit'; noteId: string }>) => {
      const { mode, noteId } = action.payload;
      state.isOpen = true;
      state.mode = mode;
      state.noteId = noteId;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const selectDialog = (state: RootState) => state.dialog;

export const selectIsOpen = (state: RootState) => selectDialog(state).isOpen;
export const selectMode = (state: RootState) => selectDialog(state).mode;
export const selectNoteId = (state: RootState) => selectDialog(state).noteId;

export default dialogSlice.reducer;
