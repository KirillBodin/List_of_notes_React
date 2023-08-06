// CategoryTable.tsx

import {useSelector} from 'react-redux';
import CategoryRow from '../components/CategoryRow';
import Table from '../components/Table';
import {Category, Column} from '../actions/interfacesTables';
import {selectCategoryStat} from '../reducers/notesReducer';

const CategoryTable: React.FC = () => {
    const categories = useSelector(selectCategoryStat);

    const generateColumns = (): Column[] => {
        const columns: Column[] = [
            {
                id: '1',
                title: '',
                className: 'logo',
            },
            {
                id: '2',
                title: 'Category',
                className: 'category__head',
            },
            {
                id: '3',
                title: 'Active',
                className: 'category__head',
            },
            {
                id: '4',
                title: 'Archived',
                className: 'category__head',
            },
        ];

        return columns;
    };

    const columns = generateColumns();

    const renderCategoryRow = (category: Category) => (
        <CategoryRow key={category.name} category={category}/>
    );

    return (
        <Table
            columns={columns}
            data={categories}
            renderRow={renderCategoryRow}
            headClassName='bg-gray-500 text-white'
        />
    );
};

export default CategoryTable;
