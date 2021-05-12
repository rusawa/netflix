function HeaderIcon({ Icon, title }) {
    return (
        <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group'>
            <Icon className='h-7 mb-1 group-hover:animate-bounce'/>
            <p className='opacity-0 group-hover:opacity-100'>{title}</p>
        </div>
    )
}

export default HeaderIcon;
