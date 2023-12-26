import React from 'react'
function MusicCard({ songName, songArtist, songPhoto }) {
  return (
    <div className='container flex justify-center mt-16' >
      <div className='flex flex-col items-center bg-blue-50 pt-2 pb-4 px-4 rounded-[28px]'>
        <img className='w-8 h-8 rounded-full' src="/Images/apollo.png" alt="Logo" />
        <p className="font-sansi text-[8px] block font-semibold tracking-wider not-italic">ApolloTune AI</p>
        <img className='w-40 h-40 mt-2' src={songPhoto} alt="Music Foto" />
        <div className='flex flex-col items-center mt-2'>
        <p className="font-sansi italic font-extrabold text-m block  tracking-wider">{songName}</p>
        <p className=" font-light text-xs block font-semibold tracking-wider font-poppins">{songArtist}</p>
        </div>

      </div>
    </div>
  )
}

export default MusicCard