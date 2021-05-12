import Image from 'next/image';
import HeaderIcon from '../components/HeaderIcon';
import { HomeIcon, BookmarkIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <Image className='object-contain'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                width={200}
                height={70}
            />
            <div className='flex flex-grow justify-evenly max-w-xl'>
                <HeaderIcon title='główna' Icon={HomeIcon} />
                <HeaderIcon title='szukaj' Icon={SearchIcon} />
                <HeaderIcon title='zapisane' Icon={BookmarkIcon} />
                <HeaderIcon title='konto' Icon={UserIcon} />
            </div>

        </header>
    );
}

export default Header;
