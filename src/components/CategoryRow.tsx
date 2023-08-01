import React from 'react';
import Icon from './Icon';

import { Category } from '../actions/interfacesTables';

interface CategoryRowProps {
    category: Category;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ category }) => {
    return (
        <tr>
            <td className='logo'>
                <Icon category={category.name} />
            </td>
            <td>{category.name}</td>
            <td>{category.active}</td>
            <td>{category.archived}</td>
        </tr>
    );
};

export default CategoryRow;
