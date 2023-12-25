import React from 'react'

function NaturalLanguageSearch() {
  return (
    <div className='container mx-auto h-[516px] bg-black-125 mt-12'>

      <input class="mx-auto mt-12 placeholder:italic placeholder:text-slate-400 block bg-blue-50 h-[61px] w-[300px] sm:w-[400px] md:w-[641px] border border-slate-300 rounded-[36px] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Please describe the music you want to listen to..." type="text" name="search" />

    </div>
  )
}

export default NaturalLanguageSearch