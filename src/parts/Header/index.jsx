import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
      <div className="container mx-auto bg-pink-50 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className='flex items-center justify-between space-x-3'>
            <img className='w-15 h-20 rounded-[32px]' src="/Images/apollo.png" alt="Logo" />
            <div className="font-inter italic text-2xl font-semibold tracking-wider	">ApolloTune AI</div>
          </div>
          <nav className="space-x-24">
            <FontAwesomeIcon className='w-9 h-9' icon={faUserPlus} />
            <FontAwesomeIcon className='w-9 h-9' icon={faRightFromBracket} />
            <FontAwesomeIcon className='w-9 h-9' icon={faCircleInfo} />
          </nav>
        </div>
      </div>
  )
}

export default Header