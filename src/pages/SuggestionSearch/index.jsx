import KeyMusicCard from '../../components/KeyMusicCard'
import exampleData from '../../../JsonTestData/musicList'
import { LinearProgress, Stack } from '@mui/material';
import { favoriteSearchWithSpotify } from '../../api/openai';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Warning from '../../components/Warning';
function SuggestionSearch() {
  const { loggedIn, Logout } = useAuth()
  const [data, setData] = useState([])
  const [readyData, setReadyData] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState("")
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
      if (loggedIn) {
        setReadyData(false);
        let response = await favoriteSearchWithSpotify()
        setData(response)
        setReadyData(true)
      }else{
        setError("Please login")
      }
    } catch (error) {
      if(error.message != "Request failed with status code 401"){
          bag.setErrors({ general: error.response.data.message })
          setReadyData(true);
      }
      else{
        Logout()
      }
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
      {error.length != 0 && <Warning message={error} />}
      <button
              className='mx-auto h-11 mt-3 rounded-3xl bg-white w-40 flex justify-center items-center  hover:bg-gray-100'
              onClick={handleClick}
            >
              <p className='px-2 py-1 font-medium text-[16px] text-slate-900 not-italic text-black'>Suggest Music</p>
            </button>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mb-2'>
        {data.length != 0 ? data.data.map(item => {
          return (
            <KeyMusicCard key={item.spotifyLink} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} />
          )
        }) : exampleData.map(item => {
          return (
            <KeyMusicCard key={item.spotifyLink} songName={item.songName} songArtist={item.songArtist} songPhoto={item.songPhoto} spotifyLink={item.spotifyLink} />
          )
        })}
      </div>
    </div>
  )
}

export default SuggestionSearch