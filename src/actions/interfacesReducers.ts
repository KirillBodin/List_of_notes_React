import {Note} from "./interfacesTables";

type DialogMode = 'create' | 'edit';

export interface CreateNote {
  name: string;
  category: string;
  content: string;
}

export interface UpdateNote {
  id: string;
  name: string;
  category: string;
  content: string;
}

export interface OpenModal {
  noteId: string;
  mode: DialogMode;
}

export interface NotesState {
  notes: Note[];
}


export interface DialogState {
  isOpen: boolean;
  mode: DialogMode;
  noteId: string;
}

