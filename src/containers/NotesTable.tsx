// NotesTable.tsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Note, Column } from '../actions/interfacesTables';
import { Active, Archive, deleteAllNotes } from '../reducers/notesReducer';
import NoteRow from '../components/NoteRow';
import Table from '../components/Table';
import Icon from '../components/Icon';

const NotesTable: React.FC = () => {
    const [isArchive, setIsArchive] = useState(false);
    const dispatch = useDispatch();

    const active = useSelector(Active);
    const archive = useSelector(Archive);

    const toggleArchive = () => {
        setIsArchive((prevIsArchive) => !prevIsArchive);
    };

    const deleteAll = () => {
        dispatch(deleteAllNotes());
    };

    const columns: Column[] = [
        {
            id: '1',
            title: '',
            className: 'logo',
        },
        {
            id: '2',
            title: 'Name',
            className: 'bg-gray-500 text-white',
        },
        {
            id: '3',
            title: 'Created',
            className: 'bg-gray-500 text-white',
        },
        {
            id: '4',
            title: 'Category',
            className: 'bg-gray-500 text-white',
        },
        {
            id: '5',
            title: 'Content',
            className: 'bg-gray-500 text-white',
        },
        {
            id: '6',
            title: 'Dates',
            className: 'bg-gray-500 text-white',
        },
        {
            id: '7',
            title: (
                <>
                    <div className="toggle" onClick={toggleArchive}>
                        <Icon category={isArchive ? 'Archive' : 'UnArchive'} />
                    </div>
                </>
            ),
            className: 'bg-gray-500 text-white center-icon',
        },
        {
            id: '8',
            title: (
                <>
                    <div className="toggle trash-icon" onClick={deleteAll}>
                        <Icon category="Trash" />
                    </div>
                </>
            ),
            className: 'headlines_table center-icon',
            colSpan: 2,
        },
    ];

    return (
        <Table
            columns={columns}
            data={isArchive ? archive : active}
            renderRow={(el: Note) => <NoteRow key={el.id} note={el} isArchive={isArchive} />}
            headClassName="bg-gray-500 text-white"
        />
    );
};

export default NotesTable;
