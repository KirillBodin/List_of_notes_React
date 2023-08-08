import React from 'react';
import {Provider, useDispatch} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { Story, Meta } from '@storybook/react/types-6-0';
/*import {Story, Meta} from '@storybook/react';*/
import {dialogSlice} from '../src/reducers/dialogReducer';
import {notesSlice} from '../src/reducers/notesReducer';
import {openDialog} from '../src/reducers/dialogReducer';
import ModalWindow from '../src/components/ModalWindow';
import MainView from '../src/containers/MainView';

const rootReducer = combineReducers({
    dialog: dialogSlice.reducer,
    notes: notesSlice.reducer,
});

const store = createStore(rootReducer);

export default {
    title: 'Containers/MainView',
    component: MainView,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
} as Meta;

const Template: Story = (args) => {
    const dispatch = useDispatch();

    const handleCreateNote = () => {
        dispatch(openDialog({mode: 'create', noteId: ''}));
    };

    return <MainView {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [
    (Story) => (
        <div>
            <Story/>
            <ModalWindow/>
        </div>
    ),
];
