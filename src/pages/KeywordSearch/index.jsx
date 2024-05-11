import React from 'react';
import exampleData from '../../../JsonTestData/musicList';
import KeyMusicCard from '../../components/KeyMusicCard';
import KeyPagination from '../../parts/KeyPagination';
import { useSearchParams } from 'react-router-dom';

function KeywordSearch() {
  const [searchParams] = useSearchParams();
  return (
    <div className='container flex justify-content  min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px] pt-2'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-2 w-full max-w-screen-lg mx-auto'>
        <div className="mx-auto mt-2">
          <div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-8'>
            <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="ENERGETIC" id="ENERGETIC" />
                <label className='ml-2 text-lg' htmlFor="ENERGETIC">Energetic</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="ENJOYABLE" id="ENJOYABLE" />
                <label className='ml-2 text-lg' htmlFor="ENJOYABLE">Enjoyable</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="RELAXATION" id="RELAXATION" />
                <label className='ml-2 text-lg' htmlFor="RELAXATION">Relaxation</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="PARTY" id="PARTY" />
                <label className='ml-2 text-lg' htmlFor="PARTY">Party</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="TRAINING" id="TRAINING" />
                <label className='ml-2 text-lg' htmlFor="TRAINING">Training</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="SAD" id="SAD" />
                <label className='ml-2 text-lg' htmlFor="SAD">Sad</label><br />

              </form>
            </div>

            <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="_2020s" id="_2020s" />
                <label className='ml-2 text-lg' htmlFor="_2020s">2020-2024</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="_2010s" id="_2010s" />
                <label className='ml-2 text-lg' htmlFor="_2010s">2010-2020</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="_2000s" id="_2000s" />
                <label className='ml-2 text-lg' htmlFor="_2000s">2000-2010</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="_1990s" id="_1990s" />
                <label className='ml-2 text-lg' htmlFor="_1990s">1990-2000</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="_1980s" id="_1980s" />
                <label className='ml-2 text-lg' htmlFor="_1980s">1980-1990</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="_1970s" id="_1970s" />
                <label className='ml-2 text-lg' htmlFor="_1970s">1970-1980</label><br />
              </form>
            </div>

            <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="pop" id="pop" />
                <label className='ml-2 text-lg' htmlFor="pop">Pop</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="rock" id="rock" />
                <label className='ml-2 text-lg' htmlFor="rock">Rock</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="rap" id="rap" />
                <label className='ml-2 text-lg' htmlFor="rap">Rap</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="electronic" id="electronic" />
                <label className='ml-2 text-lg' htmlFor="electronic">Electronic</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="jazz" id="jazz" />
                <label className='ml-2 text-lg' htmlFor="jazz">Jazz</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="blues" id="blues" />
                <label className='ml-2 text-lg' htmlFor="blues">Blues</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="classic" id="classic" />
                <label className='ml-2 text-lg' htmlFor="classic">Classic</label><br />
              </form>
            </div>
            <select className='h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50' name="dil" id="dil">
              <option className='text-md' disabled hidden>Choose a language</option>
              <option className='text-md' value="en">English</option>
              <option className='text-md' value="tr">Turkish</option>
              <option className='text-md' value="gr">German</option>
            </select>
          </div>
          <button
            className='mx-auto h-11 mt-3 rounded-[6px] bg-white w-56 flex justify-start items-center pl-2 hover:bg-gray-200'
          >
            <p className='font-sansi text-sm tracking-wider not-italic text-black'>Suggest Music</p>
          </button>
        </div>
        <div className='mx-auto'>
          {
            exampleData
              .slice(
                searchParams.get('page') != null
                  ? (searchParams.get('page') - 1) * 4
                  : 0,
                searchParams.get('page') != null
                  ? (searchParams.get('page') - 1) * 4 + 4
                  : 4
              )
              .map((item, index) => (
                <KeyMusicCard
                  key={index}
                  songName={item.songName}
                  songArtist={item.songArtist}
                  songPhoto={item.songPhoto}
                  spotifyLink={item.spotifyLink}
                  ytmusicLink={item.ytmusicLink}
                />
              ))
          }
          <KeyPagination />
        </div>
      </div>

    </div>
  )
}

export default KeywordSearch