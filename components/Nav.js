import requests from '../utils/requests';
import { useRouter } from 'next/router';

function Nav() {

const router = useRouter();

    return <nav className='relative'>
        <div className='flex px-10 sm:px-20 text-xl space-x-10 sm:space-x-20 whitespace-nowrap overflow-y-hidden overflow-x-scroll scrollbar-hide sm:justify-center'>
            {Object.entries(requests).map(([key, {title, url}]) => (
                <h2 key={key} onClick={() => router.push(`/?genre=${key}`) } className='cursor-pointer transition duration-100 transform 
                hover:scale-110 hover:text-white active:text-gray-500 last:pr-20 sm:last:pr-0'>{title}</h2>
            ))}
        </div>

        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#000000] h-10 w-1/12'/>
    </nav>
}

export default Nav;
