import React from 'react';
import { TableProps } from '../actions/interfacesTables';

const Table: React.FC<TableProps> = ({
                                         columns,
                                         data,
                                         renderRow,
                                         headClassName,
                                     }) => (
    <table>
        <thead className={headClassName}>
        <tr>
            {columns.map(({ id, className, colSpan, title }) => (
                <th key={id} id={id} className={className} colSpan={colSpan}>
                    {title}
                </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {data.map((el) => (
            <React.Fragment key={el.id}>{renderRow(el)}</React.Fragment>
        ))}
        </tbody>
    </table>
);

export default Table;
