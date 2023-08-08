import React from 'react';
import NotesTable from './NotesTable';
import CategoryTable from './CategoryTable';
import ModalWindow from '../components/ModalWindow';
import { useDispatch } from 'react-redux';
import { openDialog } from '../reducers/dialogReducer';

const MainView: React.FC = () => {
    const dispatch = useDispatch();

    const handleCreateNote = () => {
        dispatch(openDialog({ mode: 'create', noteId: '' }));
    };

    return (
        <div className='App'>
            <div className='container'>
                <NotesTable />
                <div className='wrapper'>
                    <button onClick={handleCreateNote} id='addNote'>
                        Create Note
                    </button>
                </div>
                <ModalWindow />
                <CategoryTable />
            </div>
        </div>
    );
};

export default MainView;