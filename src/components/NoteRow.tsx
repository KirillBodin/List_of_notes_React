import { FC } from 'react';
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
        <tr>
            <td className='logo'>
                <Icon category={note.category} />
            </td>
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates}</td>
            <td className='icon' onClick={openCustomModal}>
                <Icon category="Pencil" />
            </td>
            <td className='icon' onClick={() => dispatch(toggle(note.id))}>
                {archiveIcon}
            </td>
            <td className='icon' onClick={() => dispatch(deleteNote(note.id))}>
                <Icon category="Trash" />
            </td>
        </tr>
    );
};

export default NoteRow;
