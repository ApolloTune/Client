import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getFavoriteSongs, addFavoriteSong, deleteFavoriteSong } from '../../api/crudSong';
import { useQueryClient } from 'react-query';
function MusicCard({ songName, songArtist, songPhoto, spotifyLink }) {
  const queryClient = useQueryClient();
  const [isFavorite, setIsFavorite] = useState(false);
  const { loggedIn } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      if (!loggedIn) return;
      const favoritesOfUser = await getFavoriteSongs();
      setIsFavorite(favoritesOfUser.data.some((song) => song.songname === songName));
    };
    fetchData();
  }, [isFavorite])
  const handleFavoriteClick = async () => {
    if (!isFavorite) {
      try {
        await addFavoriteSong({ songname: songName, songartist: songArtist, songphoto: songPhoto, spotifylink: spotifyLink })
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries(['favoritesOfUser']);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await deleteFavoriteSong({ favSongName: songName });
        setIsFavorite(!isFavorite)
        queryClient.invalidateQueries(['favoritesOfUser']);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className='container flex justify-center mt-10' >
      <div className='flex flex-col items-center bg-blue-50 pt-2 pb-5 px-4 rounded-[28px]'>
        <img className='w-7 h-7 rounded-full' src="https://raw.githubusercontent.com/ApolloTune/Client/main/Images/apollo.png" alt="Logo" />
        <p className="font-sansi italic font-black text-[8px] tracking-wider">Apollo Tune</p>
        <img className='w-36 h-36 mt-2 border-2 border-white' src={songPhoto} alt="Music Foto" />
        <div className='flex flex-col items-center mt-2'>
          <p className="font-sansi italic font-black text-sm block  tracking-wider"> {songName.length > 20 ? songName.substring(0, 17) + '...' : songName}</p>
          <p className="text-slate-700 font-light text-xs block font-semibold tracking-wider font-poppins">{songArtist}</p>
          <div className='mt-3 flex justify-between space-x-8'>
            <a href={spotifyLink} target='_blank'>
              <FontAwesomeIcon className='w-6 h-6' icon={faSpotify} />
            </a>
            {!isFavorite ? <FontAwesomeIcon className='w-6 h-6' icon={faHeart} onClick={handleFavoriteClick} style={{ color: "black" }} /> : <FontAwesomeIcon className='w-6 h-6' icon={faHeart} onClick={handleFavoriteClick} style={{ color: "red" }} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicCard