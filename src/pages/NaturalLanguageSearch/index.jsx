import React from 'react';
import MusicCard from '../../components/MusicCard';
function NaturalLanguageSearch() {
  return (
    <div className='container flex justify-content flex-col h-[516px] bg-black-125 mt-12'>
      <input
        className="mt-8 mx-auto placeholder:italic placeholder:text-slate-400 bg-blue-50 h-[61px] w-full md:w-[641px] border border-slate-300 rounded-[36px] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Please describe the music you want to listen to..."
        type="text"
        name="search"
      />
      <p className="italic tracking-wide text-white mt-2 mx-auto">
        örn: Bugün çok enerjik hissediyorum bana uygun Türkçe pop müzikleri öner.
      </p>
      <MusicCard songName={"DenemeSong"} songArtist={"DenemeArtist"} songPhoto={"https://i.scdn.co/image/ab67616d0000b273a2d7163d26591135814ea80e"}/>
    </div>
  );
}

export default NaturalLanguageSearch;
