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
        <div className="mx-auto">
          <div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-4'>
            <div className='container flex justify-content text-white bg-red-50 p-4 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="enerjik" id="enerjik" />
                <label className='ml-2 text-lg' htmlFor="enerjik">Enerjik</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="keyifli" id="keyifli" />
                <label className='ml-2 text-lg' htmlFor="keyifli">Keyifli</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="rahatlama" id="rahatlama" />
                <label className='ml-2 text-lg' htmlFor="rahatlama">Rahatlama</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="parti" id="parti" />
                <label className='ml-2 text-lg' htmlFor="parti">Parti</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="antrenman" id="antrenman" />
                <label className='ml-2 text-lg' htmlFor="antrenman">Antrenman</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="huzunlu" id="huzunlu" />
                <label className='ml-2 text-lg' htmlFor="huzunlu">Hüzünlü</label><br />

              </form>
            </div>

            <div className='container flex justify-content text-white bg-red-50 p-4 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="2020-2024" id="2020-2024" />
                <label className='ml-2 text-lg' htmlFor="2020-2024">2020-2024</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="2010-2020" id="2010-2020" />
                <label className='ml-2 text-lg' htmlFor="2010-2020">2010-2020</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="2000-2010" id="2000-2010" />
                <label className='ml-2 text-lg' htmlFor="2000-2010">2000-2010</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="1990-2000" id="1990-2000" />
                <label className='ml-2 text-lg' htmlFor="1990-2000">1990-2000</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="1980-1990" id="1980-1990" />
                <label className='ml-2 text-lg' htmlFor="1980-1990">1980-1990</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="1970-1980" id="1970-1980" />
                <label className='ml-2 text-lg' htmlFor="1970-1980">1970-1980</label><br />
              </form>
            </div>

            <div className='container flex justify-content text-white bg-red-50 p-4 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="enerjik" id="enerjik" />
                <label className='ml-2 text-lg' htmlFor="enerjik">Enerjik</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="keyifli" id="keyifli" />
                <label className='ml-2 text-lg' htmlFor="keyifli">Keyifli</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="rahatlama" id="rahatlama" />
                <label className='ml-2 text-lg' htmlFor="rahatlama">Rahatlama</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="parti" id="parti" />
                <label className='ml-2 text-lg' htmlFor="parti">Parti</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="antrenman" id="antrenman" />
                <label className='ml-2 text-lg' htmlFor="antrenman">Antrenman</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="huzunlu" id="huzunlu" />
                <label className='ml-2 text-lg' htmlFor="huzunlu">Hüzünlü</label><br />

              </form>
            </div>

            <div className='container flex justify-content text-white bg-red-50 p-4 rounded-[8px] w-[196px]'>
              <form action="">
                <input type="checkbox" className='w-[20px] h-[20px]' name="enerjik" id="enerjik" />
                <label className='ml-2 text-lg' htmlFor="enerjik">Enerjik</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="keyifli" id="keyifli" />
                <label className='ml-2 text-lg' htmlFor="keyifli">Keyifli</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="rahatlama" id="rahatlama" />
                <label className='ml-2 text-lg' htmlFor="rahatlama">Rahatlama</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="parti" id="parti" />
                <label className='ml-2 text-lg' htmlFor="parti">Parti</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="antrenman" id="antrenman" />
                <label className='ml-2 text-lg' htmlFor="antrenman">Antrenman</label><br />
                <input type="checkbox" className='w-[20px] h-[20px]' name="huzunlu" id="huzunlu" />
                <label className='ml-2 text-lg' htmlFor="huzunlu">Hüzünlü</label><br />

              </form>
            </div>
          </div>
        </div>
        <div className='mx-auto'>
          {
            exampleData.slice((searchParams.get('page') - 1) * 4, ((searchParams.get('page') - 1) * 4) + 4).map((item, index) => (
              <KeyMusicCard key={index} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} ytmusicLink={item.ytmusicLink} />
            ))
          }
          <KeyPagination />
        </div>
      </div>

    </div>
  )
}

export default KeywordSearch