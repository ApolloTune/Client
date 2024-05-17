import React from 'react'
import KeyMusicCard from '../../components/KeyMusicCard'
import exampleData from '../../../JsonTestData/musicList'
function SuggestionSearch() {
  return (
    <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
      <p className="italic tracking-wide text-white mt-2 mx-auto">
      Do you want us to find songs similar to the ones you like? 😉
      </p>
      <button
        className='flex justify-center items-center mx-auto h-11 mt-3 rounded-[4px] bg-white w-56 flex justify-start items-center pl-2 hover:bg-gray-200 mb-1'
      >
        <p className='font-sansi text-sm tracking-wider not-italic text-black'>Suggest Music</p>
      </button>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mb-2'>
        {
          exampleData.map((item, index) => {
            return (
              <KeyMusicCard key={index} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} ytmusicLink={item.ytmusicLink} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SuggestionSearch