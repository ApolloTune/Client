import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useQueryClient } from 'react-query';
import { getFavoriteSongs, addFavoriteSong, deleteFavoriteSong } from '../../api/crudSong';
function KeyMusicCard({ songName, songArtist, songPhoto, spotifyLink }) {
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
    <div className='container flex justify-center mt-4'>
      <div className='flex flex-row items-center bg-blue-50 px-4 py-3 rounded-[28px] sm:w-96'>
        <img className='w-10 h-10 border-2 border-red-100 rounded-full' src="https://raw.githubusercontent.com/ApolloTune/Client/main/Images/apollo.png" alt="Logo" />
        <img className='w-16 h-16 ml-4 border-2 border-white' src={songPhoto} alt="Music Foto" />
        <div className='flex flex-col items-center ml-2'>
          <p style={{ color: "black" }} className="font-sansi font-black italic text-sm tracking-wider mr-auto">{songName}</p>
          <p className="text-slate-600 font-light text-xs block font-semibold tracking-wider font-poppins mr-auto">{songArtist}</p>
        </div>
        <div className='flex flex-row space-x-3 ml-auto'>
          <a href={spotifyLink} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='w-6 h-6' style={{ color: "black" }} icon={faSpotify} />
          </a>
          {!isFavorite ? <FontAwesomeIcon onClick={handleFavoriteClick} className='w-6 h-6' style={{ color: "black" }} icon={faHeart} /> : <FontAwesomeIcon className='w-6 h-6' style={{ color: "red" }} icon={faHeart} onClick={handleFavoriteClick} />}
        </div>
      </div>
    </div>
  );
}

export default KeyMusicCard;
