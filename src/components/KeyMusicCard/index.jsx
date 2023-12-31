import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function KeyMusicCard({ songName, songArtist, songPhoto, spotifyLink, ytmusicLink }) {
  return (
    <div className='container flex justify-center mt-4'>
      <div className='flex flex-row items-center bg-blue-50 px-4 py-3 rounded-[28px] w-full max-w-[400px]'>
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
          <FontAwesomeIcon className='w-6 h-6' style={{ color: "black" }} icon={faHeart} />
          <a href={ytmusicLink} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='w-6 h-6' style={{ color: "black" }} icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default KeyMusicCard;
