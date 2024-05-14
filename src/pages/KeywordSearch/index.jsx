import { useState, useEffect } from 'react';
import exampleData from '../../../JsonTestData/musicList';
import KeyMusicCard from '../../components/KeyMusicCard';
import KeyPagination from '../../parts/KeyPagination'
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { LinearProgress, Stack } from '@mui/material';
import { keySearchWithSpotify } from '../../api/openai';
function KeywordSearch() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState([])
  const [readyData, setReadyData] = useState(true)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      emotions: [],
      musicYears: [],
      musicTypes: [],
      musicLanguages: []
    },
    onSubmit: async (values, bag) => {
      try {
        setReadyData(false);
        let response = await keySearchWithSpotify(values)
        setData(response);
        setReadyData(true);
      } catch (error) {
        bag.setErrors({ general: error })
      }
    }
  })
  return (
    <div className='container flex justify-center items-center min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px] pt-2 pb-2'>
      <form onSubmit={handleSubmit}>
        {!readyData && <div className='flex items-center justify-center flex-col'>
          <Stack sx={{ width: '76%', color: 'grey.500', mt: 2, mb: 2 }} spacing={2}>
            <LinearProgress variant='determinate' color="success" value={progress} />
          </Stack>
        </div>}
        <div className='grid sm:grid-cols-1 xl:grid-cols-2 w-full max-w-screen-lg mx-auto'>
          <div className="mx-auto mt-2">
            <div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-8'>
              <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
                <div>
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="ENERGETIC" value="ENERGETIC" onChange={handleChange} checked={values.emotions.includes("ENERGETIC")} />
                  <label className='ml-2 text-lg' htmlFor="ENERGETIC">Energetic</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="ENJOYABLE" value="ENJOYABLE" onChange={handleChange} checked={values.emotions.includes("ENJOYABLE")} />
                  <label className='ml-2 text-lg' htmlFor="ENJOYABLE">Enjoyable</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="RELAXATION" value="RELAXATION" onChange={handleChange} checked={values.emotions.includes("RELAXATION")} />
                  <label className='ml-2 text-lg' htmlFor="RELAXATION">Relaxation</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="PARTY" value="PARTY" onChange={handleChange} checked={values.emotions.includes("PARTY")} />
                  <label className='ml-2 text-lg' htmlFor="PARTY">Party</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="TRAINING" value="TRAINING" onChange={handleChange} checked={values.emotions.includes("TRAINING")} />
                  <label className='ml-2 text-lg' htmlFor="TRAINING">Training</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="emotions" id="SAD" value="SAD" onChange={handleChange} checked={values.emotions.includes("SAD")} />
                  <label className='ml-2 text-lg' htmlFor="SAD">Sad</label><br />
                </div>
              </div>

              <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
                <div>
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_2020s" value="_2020s" onChange={handleChange} checked={values.musicYears.includes("_2020s")} />
                  <label className='ml-2 text-lg' htmlFor="_2020s">2020-2024</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_2010s" value="_2010s" onChange={handleChange} checked={values.musicYears.includes("_2010s")} />
                  <label className='ml-2 text-lg' htmlFor="_2010s">2010-2020</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_2000s" value="_2000s" onChange={handleChange} checked={values.musicYears.includes("_2000s")} />
                  <label className='ml-2 text-lg' htmlFor="_2000s">2000-2010</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_1990s" value="_1990s" onChange={handleChange} checked={values.musicYears.includes("_1990s")} />
                  <label className='ml-2 text-lg' htmlFor="_1990s">1990-2000</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_1980s" value="_1980s" onChange={handleChange} checked={values.musicYears.includes("_1980s")} />
                  <label className='ml-2 text-lg' htmlFor="_1980s">1980-1990</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicYears" id="_1970s" value="_1970s" onChange={handleChange} checked={values.musicYears.includes("_1970s")} />
                  <label className='ml-2 text-lg' htmlFor="_1970s">1970-1980</label><br />
                </div>
              </div>

              <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
                <div>
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="pop" value="POP" onChange={handleChange} checked={values.musicTypes.includes("POP")} />
                  <label className='ml-2 text-lg' htmlFor="pop">Pop</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="rock" value="ROCK" onChange={handleChange} checked={values.musicTypes.includes("ROCK")} />
                  <label className='ml-2 text-lg' htmlFor="rock">Rock</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="rap" value="RAP" onChange={handleChange} checked={values.musicTypes.includes("RAP")} />
                  <label className='ml-2 text-lg' htmlFor="rap">Rap</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="electronic" value="ELECTRONICS" onChange={handleChange} checked={values.musicTypes.includes("ELECTRONICS")} />
                  <label className='ml-2 text-lg' htmlFor="electronic">Electronic</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="jazz" value="JAZZ" onChange={handleChange} checked={values.musicTypes.includes("JAZZ")} />
                  <label className='ml-2 text-lg' htmlFor="jazz">Jazz</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="blues" value="BLUES" onChange={handleChange} checked={values.musicTypes.includes("BLUES")} />
                  <label className='ml-2 text-lg' htmlFor="blues">Blues</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicTypes" id="classic" value="CLASSIC" onChange={handleChange} checked={values.musicTypes.includes("CLASSIC")} />
                  <label className='ml-2 text-lg' htmlFor="classic">Classic</label><br />
                </div>
              </div>
              <div className='container flex justify-content text-white bg-red-50 p-2 rounded-[8px] w-[196px]'>
                <div>
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="pop" value="ENGLISH" onChange={handleChange} checked={values.musicLanguages.includes("ENGLISH")} />
                  <label className='ml-2 text-lg' htmlFor="pop">English</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rock" value="TURKISH" onChange={handleChange} checked={values.musicLanguages.includes("TURKISH")} />
                  <label className='ml-2 text-lg' htmlFor="rock">Turkish</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rap" value="GERMAN" onChange={handleChange} checked={values.musicLanguages.includes("GERMAN")} />
                  <label className='ml-2 text-lg' htmlFor="rap">German</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rap" value="FRENCH" onChange={handleChange} checked={values.musicLanguages.includes("FRENCH")} />
                  <label className='ml-2 text-lg' htmlFor="rap">French</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rap" value="ITALIAN" onChange={handleChange} checked={values.musicLanguages.includes("ITALIAN")} />
                  <label className='ml-2 text-lg' htmlFor="rap">Italian</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rap" value="PORTUGUESE" onChange={handleChange} checked={values.musicLanguages.includes("PORTUGUESE")} />
                  <label className='ml-2 text-lg' htmlFor="rap">Portuguese</label><br />
                  <input type="checkbox" className='w-[20px] h-[20px]' name="musicLanguages" id="rap" value="SPAIN" onChange={handleChange} checked={values.musicLanguages.includes("SPAIN")} />
                  <label className='ml-2 text-lg' htmlFor="rap">Spain</label><br />
                </div>
              </div>
            </div>
            <button
              className='mx-auto h-11 mt-3 rounded-[6px] bg-white w-56 flex justify-start items-center pl-2 hover:bg-gray-200'
            >
              <p className='font-sansi text-sm tracking-wider not-italic text-black'>Suggest Music</p>
            </button>
          </div>
          <div className='mx-auto'>
            {data.length != 0 ? data.data.slice(
              searchParams.get('page') != null
                ? (searchParams.get('page') - 1) * 4
                : 0,
              searchParams.get('page') != null
                ? (searchParams.get('page') - 1) * 4 + 4
                : 4
            ).map((item, index) => {
              return (
                <KeyMusicCard
                  key={index}
                  songName={item.songName}
                  songArtist={item.songArtist}
                  songPhoto={item.songPhoto}
                  spotifyLink={item.spotifyLink}
                />
              )
            }) : exampleData.slice(
              searchParams.get('page') != null
                ? (searchParams.get('page') - 1) * 4
                : 0,
              searchParams.get('page') != null
                ? (searchParams.get('page') - 1) * 4 + 4
                : 4
            ).map((item, index) => {
              return (
                <KeyMusicCard
                  key={index}
                  songName={item.songName}
                  songArtist={item.songArtist}
                  songPhoto={item.songPhoto}
                  spotifyLink={item.spotifyLink}
                />
              )
            })}
            <KeyPagination />
          </div>
        </div>
      </form>
    </div>
  )
}

export default KeywordSearch