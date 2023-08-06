import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
    closeDialog,
    selectIsOpen,
    selectMode,
    selectNoteId,
} from '../reducers/dialogReducer';
import { addNote, selectNote, updateNote } from '../reducers/notesReducer';

const ModalWindow: React.FC = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const isOpen = useSelector(selectIsOpen);
    const mode = useSelector(selectMode);
    const noteId = useSelector(selectNoteId);
    const note = useSelector((state: RootState) => selectNote(noteId)(state));

    const resetForm = () => {
        dispatch(closeDialog());
        setError('');
        setName('');
        setCategory('');
        setContent('');
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const formData = { name, category: category || 'Task', content };

        if (!formData.name.trim() || !formData.content.trim()) {
            setError('Please fill the form.');
            return;
        }

        if (mode === 'edit') {
            dispatch(updateNote({ ...formData, id: noteId }));
        } else {
            dispatch(addNote({ ...formData }));
        }

        resetForm();
    };

    return (
        <>
            {isOpen && (
                <dialog
                    className="fixed inset-0 flex items-center justify-center z-10"
                    open
                >
                    <form
                        method="dialog"
                        className="form"
                        onSubmit={handleSubmit}
                        onChange={() => {
                            setError('');
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-bold text-gray-700">
                                Note name:
                            </label>
                            <input
                                value={name}
                                name="name"
                                id="name"
                                autoComplete="off"
                                required
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block font-bold text-gray-700">
                                Choose category:
                            </label>
                            <select
                                value={category}
                                id="category"
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                                <option value="Quote">Quote</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block font-bold text-gray-700">
                                Note content:
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                wrap="soft"
                                maxLength={200}
                                cols={40}
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 mr-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                                type="reset"
                                onClick={resetForm}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                type="submit"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </>
    );
};

export default ModalWindow;
