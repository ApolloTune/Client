import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
    return (
        <div className={`grid grid-cols-4 text-white bg-black-100 mt-24 h-28 rounded-[64px]`}>
            <Link to={'/?page=1'} className={`flex justify-center items-center ${location.pathname != "/" ? "bg-red-50":""} rounded-l-[64px] ${location.pathname != "/" ? "hover:bg-red-100":""} `}>
                <FontAwesomeIcon className='w-9 h-9' icon={faKey} />
            </Link>
            <Link to={'/dogal-dil-arama'} className={`flex justify-center items-center ${location.pathname != "/dogal-dil-arama" ? "bg-red-50":""}  ${location.pathname != "/dogal-dil-arama" ? "hover:bg-red-100":""}`}>
                <FontAwesomeIcon className='w-9 h-9' icon={faMagnifyingGlass} />
            </Link>
            <Link to={"/begenilen-sarki-oneri"} className={`flex justify-center items-center ${location.pathname != "/begenilen-sarki-oneri" ? "bg-red-50":""} ${location.pathname != "/begenilen-sarki-oneri" ? "hover:bg-red-100" : ""} `}>
                <FontAwesomeIcon className='w-9 h-9' icon={faThumbsUp} />
            </Link>
            <Link to={"/playlist-fal"} className={`flex justify-center items-center rounded-r-[64px] ${location.pathname != "/playlist-fal" ? "bg-red-50":""}  ${location.pathname != "/playlist-fal" ? "hover:bg-red-100":""}`}>
                <FontAwesomeIcon className='w-9 h-9' icon={faList} />
            </Link>
        </div>
    )
}

export default Navbar