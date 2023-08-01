import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category, Note } from '../actions/interfacesTables';
import {
  CreateNote,
  UpdateNote,
  NotesState
} from '../actions/interfacesReducers';
import { Notes } from '../store/data';
import { RootState } from '../store/store';
import { getNewDate, getDates } from '../actions/helper';



const initialState: NotesState = {
  notes: Notes,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<CreateNote>) => {
      const note: Note = {
        ...action.payload,
        id: Date.now().toString(),
        created: getNewDate(),
        dates: getDates(action.payload.content),
        archived: false,
      };
      state.notes.push(note);
    },
    updateNote: (state, action: PayloadAction<UpdateNote>) => {
      const note = state.notes.find((item) => item.id === action.payload.id);

      if (note) {
        note.name = action.payload.name;
        note.category = action.payload.category;
        note.content = action.payload.content;
        note.dates = getDates(note.content);
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    toggle: (state, action: PayloadAction<string>) => {
      const note = state.notes.find((note) => note.id === action.payload);

      if (note) {
        note.archived = !note.archived;
      }
    },
    deleteAllNotes: (state) => {
      state.notes = [];
    },
  },
});

export const {
  addNote,
  updateNote,
  deleteNote,
  toggle,
  deleteAllNotes,
} = notesSlice.actions;

export const allNotes = (state: RootState) => state.notes.notes;

export const selectNote = (id: string) =>
    createSelector(allNotes, (notes) => notes.find((item) => item.id === id));

export const Active = createSelector(allNotes, (notes) =>
    notes.filter((item) => !item.archived)
);

export const Archive = createSelector(allNotes, (notes) =>
    notes.filter((item) => item.archived)
);

export const selectCategoryStat = createSelector(allNotes, (notes) =>
    notes.reduce<Category[]>((acc, note) => {
      const category = acc.find((cat) => cat.name === note.category);

      if (!category) {
        return [
          ...acc,
          {
            name: note.category,
            active: note.archived ? 0 : 1,
            archived: note.archived ? 1 : 0,
          },
        ];
      }

      note.archived ? category.archived++ : category.active++;
      return acc;
    }, [])
);

export default notesSlice.reducer;
