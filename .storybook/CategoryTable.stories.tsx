// CategoryTable.stories.tsx

import React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store/store';
import CategoryTable from '../src/containers/CategoryTable';
import { Story, Meta } from '@storybook/react/types-6-0';
/*import {Story, Meta} from '@storybook/react';*/

export default {
    title: 'Containers/CategoryTable',
    component: CategoryTable,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
} as Meta;

const Template: Story<any> = (args) => (
    <CategoryTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "name": "Idea",
    "active": 2,
    "archived": 1
};
