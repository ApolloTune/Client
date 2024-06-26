import React from 'react'
import { getFavoriteSongs } from '../../api/crudSong'
import { useQuery } from 'react-query'
import KeyMusicCard from '../../components/KeyMusicCard'
import { useSearchParams } from 'react-router-dom'
import FavoriteKeyPagination from '../../parts/FavoriteKeyPagination'
import Warning from '../../components/Warning'
function FavoriteSongs() {
    const [searchParams] = useSearchParams()
    const { isLoading, error, data } = useQuery(['favoritesOfUser'], () => getFavoriteSongs());
    if (isLoading) {
        return <div> Loading...
        </div>
    }
    if (error) {
        return <Warning message={error.message} />
    }

    return (
        <div className='container flex justify-content flex-col min-h-[516px] bg-black-125 mt-12 border-4 border-red-50 rounded-[18px]'>
            {data.data.length == 0 && <p className="italic tracking-wide text-white mt-2 mx-auto">
                Have you never liked a song before? 😔
            </p>}

            <div className='mx-auto mt-2 items-center bg-black-125 min-h-[480px] pt-2 w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mb-2'>
                    {data.length != 0 && data.data.slice(
                        searchParams.get('page') != null
                            ? (searchParams.get('page') - 1) * 8
                            : 0,
                        searchParams.get('page') != null
                            ? (searchParams.get('page') - 1) * 8 + 8
                            : 8
                    ).map(item => {
                        return (
                            <KeyMusicCard
                                key={item.spotifylink}
                                songName={item.songname}
                                songArtist={item.songartist}
                                songPhoto={item.songphoto}
                                spotifyLink={item.spotifylink} />
                        )
                    })}
                </div>
            </div>
            {data.data.length != 0 && <div className='flex justify-center items-center mb-2'>
                <FavoriteKeyPagination data={data} />
            </div>
            }

        </div>
    )
}

export default FavoriteSongs