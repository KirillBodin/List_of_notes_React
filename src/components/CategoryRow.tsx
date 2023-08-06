import React from 'react';
import Icon from './Icon';

import { Category } from '../actions/interfacesTables';

interface CategoryRowProps {
    category: Category;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ category }) => {
    return (
        <tr className="bg-gray-100 rounded-lg my-2 border-gray-300 border">
            <td className="logo">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-500 text-white">
                    <Icon category={category.name} className="text-white" />
                </div>
            </td>
            <td className="border-l border-r border-white-300 px-4 py-2">{category.name}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{category.active}</td>
            <td className="border-l border-r border-white-300 px-4 py-2">{category.archived}</td>
        </tr>
    );
};

export default CategoryRow;
