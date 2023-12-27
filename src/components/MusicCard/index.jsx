import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function MusicCard({ songName, songArtist, songPhoto }) {
  return (
    <div className='container flex justify-center mt-10 border-5 border-red-500' >
      <div className='flex flex-col items-center bg-blue-50 pt-2 pb-5 px-4 rounded-[28px]'>
        <img className='w-7 h-7 rounded-full' src="/Images/apollo.png" alt="Logo" />
        <p className="font-sansi italic font-black text-[8px] tracking-wider">Apollo Tune</p>
        <img className='w-36 h-36 mt-2 border-2 border-white' src={songPhoto} alt="Music Foto" />
        <div className='flex flex-col items-center mt-2'>
        <p className="font-sansi italic font-black text-sm block  tracking-wider">{songName}</p>
        <p className="text-slate-700 font-light text-xs block font-semibold tracking-wider font-poppins">{songArtist}</p>
        <div className='mt-3 flex justify-between space-x-8'>
          <FontAwesomeIcon className='w-7 h-7' icon={faSpotify}/>
          <FontAwesomeIcon className='w-7 h-7' icon={faHeart} />
          <FontAwesomeIcon className='w-7 h-7' icon={faYoutube} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default MusicCard