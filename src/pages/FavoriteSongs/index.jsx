import React from 'react'
import { getFavoriteSongs } from '../../api/crudSong'
import { useQuery } from 'react-query'
import KeyMusicCard from '../../components/KeyMusicCard'
import KeyPagination from '../../parts/KeyPagination'
import { useAuth } from '../../contexts/AuthContext'
function FavoriteSongs() {
    const { isLoading, error, data } = useQuery(['favoritesOfUser'], () => getFavoriteSongs());
    if (isLoading) {
        return <div> Loading...
        </div>
    }
    if (error) {
        return <div>{error.message}</div>
    }
    console.log(data); // Veri yapısını kontrol edin

    return (
        <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mb-2'>
                {data.length != 0 && data.data.map(item => {
                    return (
                        <KeyMusicCard key={item.spotifylink} songName={item.songname} songArtist={item.songartist} songPhoto={item.songphoto} spotifyLink={item.spotifylink} />
                    )
                })}
            </div>
        </div>
    )
}

export default FavoriteSongs