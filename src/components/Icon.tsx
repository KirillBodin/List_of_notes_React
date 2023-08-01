import TaskIcon from '../icons/Purchase.png';
import RandomThoughtIcon from '../icons/Random_Thought.png';
import IdeaIcon from '../icons/Idea.png';
import QuoteIcon from '../icons/Quote.png';
import Archive from '../icons/archive.png';
import UnArchive from '../icons/unarchive.png';
import Pencil from '../icons/pencil.png';
import Trash from '../icons/delete.png';



const icons: { [key: string]: React.FC } = {
    Task: () => <img className='icon-img' src={TaskIcon} alt='Task' />,
    'Random Thought': () => <img className='icon-img' src={RandomThoughtIcon} alt='Random Thought' />,
    Idea: () => <img className='icon-img' src={IdeaIcon} alt='Idea' />,
    Quote: () => <img className='icon-img' src={QuoteIcon} alt='Quote' />,
    Archive: () => <img className='icon-img' src={Archive} alt='Idea' />,
    UnArchive: () => <img className='icon-img' src={UnArchive} alt='Quote' />,
    Pencil: () => <img className='icon-img' src={Pencil} alt='Quote' />,
    Trash: () => <img className='icon-img' src={Trash} alt='Quote' />

};

interface IconProps {
    category: string;
}

const Icon: React.FC<IconProps> = ({ category }) => {
    const IconComponent = icons[category];
    if (!IconComponent) return null; // Handle case when the category is not found in icons

    return <div className='circle'><IconComponent /></div>;
};

export default Icon;
