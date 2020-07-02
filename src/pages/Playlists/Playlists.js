import React, { useState, useEffect } from 'react'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import './playlists.scss'
import { getPlaylists } from '../../api'
function Playlists() {

    const [playlists, setPlaylists] = useState()

    useEffect(()=>{
        getData()
    },[])
    async function getData (){
        const {data} = await getPlaylists()
        setPlaylists(data)
    }
    console.log('playlists :>> ', playlists);
    return (
        <div className='playlists'>
            <h1>Your Playlist</h1>

            <div className='playlists__list'>
            {playlists ? (
          playlists.items.map((playlist, i) => (
                <PlaylistCard key={i} playlist={playlist} >

                </PlaylistCard>
          ))
        ) : (
          <p>Loading ..</p>
        )}

            </div>
        </div>
    )
}

export default Playlists
