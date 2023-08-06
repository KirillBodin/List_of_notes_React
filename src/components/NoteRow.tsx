import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NoteRowProps } from '../actions/interfacesTables';
import { openDialog } from '../reducers/dialogReducer';
import { toggle, deleteNote } from '../reducers/notesReducer';
import Icon from './Icon';

const NoteRow: FC<NoteRowProps> = ({ note, isArchive }) => {
    const dispatch = useDispatch();

    const archiveIcon = isArchive ? <Icon category="Archive" /> : <Icon category="UnArchive" />;

    const openCustomModal = () => {
        dispatch(openDialog({ mode: 'edit', noteId: note.id }));
    };

    return (
        <tr className="bg-gray-100 rounded-lg my-2 border-gray-300 border">
            <td className="logo">
                <div
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-500 text-white cursor-pointer"
                    title="Click to Edit"
                >
                    <Icon category={note.category} className="text-white" />
                </div>
            </td>
            <td className="border-l border-r border-white-300 px-4 py-2">{note.name}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{note.created}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{note.category}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{note.content}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{note.dates}</td>
            <td className="icon" onClick={openCustomModal}>
                <Icon category="Pencil" className="text-white" />
            </td>
            <td className="icon" onClick={() => dispatch(toggle(note.id))}>
                {archiveIcon}
            </td>
            <td className="icon" onClick={() => dispatch(deleteNote(note.id))}>
                <Icon category="Trash" className="text-white" />
            </td>
        </tr>
    );
};

export default NoteRow;
