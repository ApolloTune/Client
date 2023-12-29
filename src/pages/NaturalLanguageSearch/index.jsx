import React from 'react';
import MusicCard from '../../components/MusicCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import exampleData from '../../../JsonTestData/musicList';
import { FreeMode, Pagination } from 'swiper/modules';

function NaturalLanguageSearch() {
  return (
    <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
      <input
        className="mt-8 mx-auto placeholder:italic placeholder:text-slate-400 bg-blue-50 h-[61px] w-full md:w-[641px] border border-slate-300 rounded-[36px] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Please describe the music you want to listen to..."
        type="text"
        name="search"
      />
      <p className="italic tracking-wide text-white mt-2 mx-auto">
        örn: Bugün çok enerjik hissediyorum bana uygun Türkçe pop müzikleri öner.
      </p>
      <div className='flex items-center justify-center flex flex-col'>
        <Swiper breakpoints={{
          475: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1286: {
            slidesPerView: 4,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[82%]'
        >
          {exampleData.map(item => {
            return(
              <SwiperSlide key={item.songPhoto}>
                <MusicCard songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} ytmusicLink={item.ytmusicLink}/>
              </SwiperSlide>
            )
          })}
          
        </Swiper>
      </div>
      
    </div>
  );
}

export default NaturalLanguageSearch;
