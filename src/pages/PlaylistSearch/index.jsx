import { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import { fortuneTellingByPlaylist } from '../../api/openai';
import { LinearProgress, Stack } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import Warning from '../../components/Warning';
function PlaylistSearch() {
  const { loggedIn, Logout } = useAuth()

  const [readyData, setReadyData] = useState(true)
  const [image, setImage] = useState("../../../Images/love/love3.jpeg")
  const [label, setLabel] = useState("aşk")
  const [review, setReview] = useState("Aşk şarkılarını dinleme sevgin nedeniyle anladım. Kalbinin DJ'i olmalısın, çünkü romantik notaları çalma konusunda ustasın! Şu aşk şarkıları, senin duygusal playlist'inin başrol oyuncuları gibi duruyor, ne dersin?")
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const { handleSubmit, handleChange, values, handleBlur, errors } = useFormik({
    initialValues: {
      search: ""
    },
    onSubmit: async (values, bag) => {
      try {
        if (loggedIn) {
          setReadyData(false)
          let response = await fortuneTellingByPlaylist({ spotifyPlayList: values.search })
          if (response.data.emotion == "hareketli" || response.data.emotion == "enerjik") {
            //"../../Images/love/love3.jpeg"
            setImage("../../../Images/energetic/energetic" + (Math.floor(Math.random() * 4) + 1) + ".jpeg")
          } else if (response.data.emotion == "arabesk") {
            setImage("../../../Images/arabesque/arabesque" + (Math.floor(Math.random() * 6) + 1) + ".jpeg")
          } else if (response.data.emotion == "ask" || response.data.emotion == "aşk") {
            setImage("../../../Images/love/love" + (Math.floor(Math.random() * 4) + 1) + ".jpeg")
          } else {
            setImage("../../../Images/motivation/motivation" + (Math.floor(Math.random() * 4) + 1) + ".png")
          }
          setLabel(response.data.emotion)
          setReview(response.data.fortune_telling)
          setReadyData(true)
        } else {
          bag.setErrors({ general: "Please login" })
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
  })




  return (
    <form onSubmit={handleSubmit}>
      <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
        <input
          className="mt-8 mx-auto placeholder:italic placeholder:text-slate-400 bg-blue-50 h-[61px] w-full md:w-[641px] border border-slate-300 rounded-[36px] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Please enter your spotify playlist link"
          type="text"
          name="search"
          id='search'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.search}
        />
        <p className="italic tracking-wide text-white mt-2 mx-auto">
          Enter the link to your Turkish Spotify Playlist and we'll find out what your mood is like.
        </p>
        <p className="italic tracking-wide text-white mx-auto">
          For now, we only read Turkish fortunes for Turkish songs.
        </p>
        {
          !readyData && <div className='flex items-center justify-center flex-col'>
            <Stack sx={{ width: '76%', color: 'grey.500', mt: 2 }} spacing={2}>
              <LinearProgress variant='determinate' color="success" value={progress} />
            </Stack>
          </div>
        }
        {errors.general && <Warning message={errors.general} />}
        <div className='mx-auto mt-6 flex flex-col items-center bg-blue-50 pt-2 pb-5 px-4 rounded-[28px] w-3/4 mb-3'>
          <img className='w-72 h-56 rounded-[30px]' src={image} alt="Ai photo" />
          <p className='font-sansi text-[12px] italic tracking-wider'>
            Playlistinizin çoğunluğunu <span className="text-red-500">{label}</span> şarkıları oluşturuyor
          </p>
          <p className='font-sansi font-black'>
            İşte Bizim Yorumumuz
          </p>
          <p className='font-sansi text-[16px]'>
            {review}
          </p>
        </div>
      </div>
    </form>

  )
}

export default PlaylistSearch