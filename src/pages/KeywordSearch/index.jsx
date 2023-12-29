import React from 'react'
import exampleData from '../../../JsonTestData/musicList'
import KeyMusicCard from '../../components/KeyMusicCard'
import KeyPagination from '../../parts/KeyPagination'
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function KeywordSearch() {
  return (
    <div className='container flex justify-content min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px] pt-2'>
<div className='grid sm:grid-cols-1 xl:grid-cols-2 w-full max-w-screen-lg mx-auto'>
  <div className="mx-auto">
    {
      exampleData.slice(4, 8).map((item, index) => (
        <KeyMusicCard key={index} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} ytmusicLink={item.ytmusicLink} />
      ))
    }
  </div>
  <div className='mx-auto'>
    {
      exampleData.slice(0, 4).map((item, index) => (
        <KeyMusicCard key={index} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} ytmusicLink={item.ytmusicLink} />
      ))
    }
    <KeyPagination/>
  </div>
</div>

    </div>
  )
}

export default KeywordSearch