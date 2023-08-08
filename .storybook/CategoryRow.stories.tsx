import React from 'react';
import { Story, Meta } from '@storybook/react';

import CategoryRow, { CategoryRowProps } from '../src/components/CategoryRow';

export default {
    title: 'Components/CategoryRow',
    component: CategoryRow,
} as Meta;

const Template: Story<CategoryRowProps> = (args) => <CategoryRow {...args} />;

export const ExampleCategoryRow = Template.bind({});
ExampleCategoryRow.args = {
    category: {
        name: 'Task',
        active: 5,
        archived: 3,
    },
};
