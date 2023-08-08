import { useSelector } from 'react-redux';

import CategoryRow from '../components/CategoryRow';
import Table from '../components/Table';
import {Category, Column} from '../actions/interfacesTables';
import { selectCategoryStat } from '../reducers/notesReducer';

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
            },
        ];

        columns.push({
            id: '3',
            title: 'Active',
        });

        columns.push({
            id: '4',
            title: 'Archived',
        });


        return columns;
    };

    const columns = generateColumns();

    const renderCategoryRow = (category: Category) => (
        <CategoryRow key={category.name} category={category} />
    );

    return (
        <Table
            columns={columns}
            data={categories}
            renderRow={renderCategoryRow}
            headClassName='statistics-head'
        />
    );
};

export default CategoryTable;