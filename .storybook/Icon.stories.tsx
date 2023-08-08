import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, {IconProps} from '../src/components/Icon';
/*import {Story, Meta} from '@storybook/react';*/
export default {
    title: 'Components/Icon',
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Task = Template.bind({});
Task.args = {category: 'Task'};

export const RandomThought = Template.bind({});
RandomThought.args = {category: 'Random Thought'};

export const Idea = Template.bind({});
Idea.args = {category: 'Idea'};

export const Quote = Template.bind({});
Quote.args = {category: 'Quote'};

export const Archive = Template.bind({});
Archive.args = {category: 'Archive'};

export const UnArchive = Template.bind({});
UnArchive.args = {category: 'UnArchive'};

export const Pencil = Template.bind({});
Pencil.args = {category: 'Pencil'};

export const Trash = Template.bind({});
Trash.args = {category: 'Trash'};
