import React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store/store';
import NotesTable from '../src/containers/NotesTable';
/*import {Story, Meta} from '@storybook/react';*/
import { Story, Meta } from '@storybook/react/types-6-0';
export default {
    title: 'Containers/NotesTable',
    component: NotesTable,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
} as Meta;

const Template: Story<any> = (args) => (
    <NotesTable {...args} />
);

export const Default = Template.bind({});
Default.args = [
    {
        id: '1',
        name: 'Idea',
        created: 'September 25, 2022',
        category: 'Idea',
        content:
            'I’m gonna have a idea appointment',
        dates: '',
        archived: false,
    },
    {
        id: '3',
        name: 'My quote',
        created: 'September 25, 2022',
        category: 'Quote',
        content:
            'I’m gonna have a quote appointment on the 3/5/2023',
        dates: '3/5/2021',
        archived: false,
    },
    {
        id: '4',
        name: 'My quote',
        created: 'September 25, 2022',
        category: 'Idea',
        content:
            'I’m gonna have a quote appointment on the 3/5/2023',
        dates: '3/5/2021',
        archived: false,
    },
    {
        id: '5',
        name: 'My quote',
        created: 'September 25, 2022',
        category: 'Quote',
        content:
            'I’m gonna have a quote appointment on the 3/5/20213',
        dates: '3/5/2021',
        archived: false,
    },
    {
        id: '6',
        name: 'My quote',
        created: 'September 25, 2022',
        category: 'Idea',
        content:
            'I’m gonna have a quote appointment on the 3/5/2023',
        dates: '3/5/2021',
        archived: true,
    },
]




