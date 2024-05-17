import KeyMusicCard from '../../components/KeyMusicCard'
import exampleData from '../../../JsonTestData/musicList'
import { LinearProgress, Stack } from '@mui/material';
import { favoriteSearchWithSpotify } from '../../api/openai';
import { useState, useEffect } from 'react';
function SuggestionSearch() {
  const [data, setData] = useState([])
  const [readyData, setReadyData] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100)
      });
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, []);
  const handleClick = async () => {
    try {
      setReadyData(false);
      let response = await favoriteSearchWithSpotify()
      setData(response)
      setReadyData(true)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
      <p className="italic tracking-wide text-white mt-2 mx-auto">
        Do you want us to find songs similar to the ones you like? 😉
      </p>
      {!readyData && <div className='flex items-center justify-center flex-col'>
        <Stack sx={{ width: '76%', color: 'grey.500', mt: 2, mb: 2 }} spacing={2}>
          <LinearProgress variant='determinate' color="success" value={progress} />
        </Stack>
      </div>}
      <button
        className='flex justify-center items-center mx-auto h-11 mt-3 rounded-[4px] bg-white w-56 flex justify-start items-center pl-2 hover:bg-gray-200 mb-1' onClick={handleClick}
      >
        <p className='font-sansi text-sm tracking-wider not-italic text-black'>Suggest Music</p>
      </button>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mb-2'>
        {data.length != 0 ? data.data.map(item => {
          return (
            <KeyMusicCard key={item.spotifyLink} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} />
          )
        }) : exampleData.map(item => {
          return (
            <KeyMusicCard key={item.spotifyLink} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink}/>
          )
        })}
      </div>
    </div>
  )
}

export default SuggestionSearch