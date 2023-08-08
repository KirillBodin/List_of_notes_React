import TaskIcon from '../icons/Purchase.png';
import RandomThoughtIcon from '../icons/Random_Thought.png';
import IdeaIcon from '../icons/Idea.png';
import QuoteIcon from '../icons/Quote.png';
import Archive from '../icons/archive.png';
import UnArchive from '../icons/unarchive.png';
import Pencil from '../icons/pencil.png';
import Trash from '../icons/delete.png';



const icons: { [key: string]: React.FC } = {
    Task: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={TaskIcon} alt='Task' />,
    'Random Thought': () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={RandomThoughtIcon} alt='Random Thought' />,
    Idea: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={IdeaIcon} alt='Idea' />,
    Quote: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={QuoteIcon} alt='Quote' />,
    Archive: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={Archive} alt='Archive' />,
    UnArchive: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={UnArchive} alt='UnArchive' />,
    Pencil: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={Pencil} alt='Pencil' />,
    Trash: () => <img className='w-8 h-8 aspect-w-1 aspect-h-1' src={Trash} alt='Trash' />,
};

export interface IconProps {
    category: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ category }) => {
    const IconComponent = icons[category];
    if (!IconComponent) return null;

    return <div className='circle'><IconComponent /></div>;
};

export default Icon;
