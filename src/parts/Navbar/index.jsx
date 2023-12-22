import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='grid grid-cols-4 text-white bg-black-100 mt-24 h-28 rounded-[64px]'>
            <Link to={'/'} className='flex justify-center items-center rounded-l-[64px] hover:bg-red-100 '>
                <FontAwesomeIcon className='w-9 h-9' icon={faKey} />
            </Link>
            <Link to={'/dogal-dil-arama'} className='flex justify-center items-center bg-red-50  hover:bg-red-100'>
                <FontAwesomeIcon className='w-9 h-9' icon={faMagnifyingGlass} />
            </Link>
            <Link to={"/begenilen-sarki-oneri"} className='flex justify-center items-center bg-red-50  hover:bg-red-100'>
                <FontAwesomeIcon className='w-9 h-9' icon={faThumbsUp} />
            </Link>
            <Link to={"/playlist-fal"} className='flex justify-center items-center rounded-r-[64px] bg-red-50  hover:bg-red-100'>
                <FontAwesomeIcon className='w-9 h-9' icon={faList} />
            </Link>
        </div>
    )
}

export default Navbar