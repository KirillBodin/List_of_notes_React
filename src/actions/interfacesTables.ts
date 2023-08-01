export interface Category {
  name: string;
  active: number;
  archived: number;
}

export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
}

export interface CategoryRowProps {
  category: Category;
}

export interface NoteRowProps {
  note: Note;
  isArchive: boolean;
}

export interface Column {
  title: string | JSX.Element;
  className?: string;
  id: string;
  colSpan?: number;
}

export interface TableProps {
  columns: Column[];
  data: any[];
  renderRow: (el: any) => JSX.Element;
  headClassName?: string;
}