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
            <div className='container max-w-5xl mx-auto p-4'>
                <NotesTable />
                <div className='flex justify-center mt-4'>
                    <button
                        onClick={handleCreateNote}
                        className='bg-gray-600 text-white px-4 py-2 rounded m-2'
                    >
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
