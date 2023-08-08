import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
/*import {Story, Meta} from '@storybook/react';*/
import Table from '../src/components/Table';
import {TableProps} from '../src/actions/interfacesTables'

export default {
    title: 'Components/Table',
    component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const ExampleTable = Template.bind({});
ExampleTable.args = {
    columns: [
        { id: '1', title: 'Column 1' },
        { id: '2', title: 'Column 2' },
    ],
    data: [
        { id: '1', column1: 'Data 1', column2: 'Data 1' },
        { id: '2', column1: 'Data 2', column2: 'Data 2' },
    ],
    renderRow: (data) => (
        <tr key={data.id}>
            <td>{data.column1}</td>
            <td>{data.column2}</td>
        </tr>
    ),
    headClassName: 'bg-gray-500 text-white',
};
