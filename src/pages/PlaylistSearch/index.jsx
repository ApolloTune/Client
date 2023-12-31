import React from 'react'

function PlaylistSearch() {
  return (
    <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
      <input
        className="mt-8 mx-auto placeholder:italic placeholder:text-slate-400 bg-blue-50 h-[61px] w-full md:w-[641px] border border-slate-300 rounded-[36px] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Please enter your spotify playlist link"
        type="text"
        name="search"
      />
      <p className="italic tracking-wide text-white mt-2 mx-auto">
        Türkçe Spotify Playlist'inizin linkini girin ruh halinizin nasıl olduğunu bulalım.
      </p>
      <div className='mx-auto mt-6 flex flex-col items-center bg-blue-50 pt-2 pb-5 px-4 rounded-[28px] w-3/4'>
        <img className='w-72 h-56 rounded-[30px]' src="https://raw.githubusercontent.com/ApolloTune/Client/main/Images/AskAI.jpeg" alt="Ai photo" />
        <p className='font-sansi text-[12px] italic tracking-wider'>
          Playlistinizin çoğunluğunu <span className="text-red-500">aşk</span> şarkıları oluşturuyor
        </p>
        <p className='font-sansi font-black'>
        İşte Bizim Yorumumuz
        </p>
        <p className='font-sansi text-[16px]'>
        "Aşk şarkılarını dinleme sevgin nedeniyle anladım. Kalbinin DJ'i olmalısın, çünkü romantik notaları çalma konusunda ustasın! Şu aşk şarkıları, senin duygusal playlist'inin başrol oyuncuları gibi duruyor, ne dersin?"
        </p>
      </div>
    </div>
  )
}

export default PlaylistSearch