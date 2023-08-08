import React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store/store';
import NoteRow from '../src/components/NoteRow';
import { Story, Meta } from '@storybook/react/types-6-0';
/*import {Story, Meta} from '@storybook/react';*/

export default {
    title: 'Components/NoteRow',
    component: NoteRow,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
} as Meta;

const Template: Story<any> = (args) => (
    <NoteRow {...args} />
);
export const Default = Template.bind({});
Default.args = {
    note: {
        id: '1',
        name: 'Example Note',
        created: '2023-07-31',
        category: 'Task',
        content: 'This is an example note content.',
        dates: '2023-08-01',
        archived: false
    },
};

