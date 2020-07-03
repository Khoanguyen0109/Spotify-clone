import React, { useState, useEffect } from 'react'
import ArtistArtwork from '../..//components/ArtistArtwork/ArtistArtwork'
import { getTopArtistsMedium } from '../../api'
import './topartists.scss'
function TopArtists() {

    const [topArtists, setTopArtists] = useState('')
    

    useEffect(()=>{
        getData()
    },[])
    async function getData () {
        const {data} = await getTopArtistsMedium()
        setTopArtists(data)
    }
    console.log('topArtists :>> ', topArtists);
    return (
        <div className='top_artists'>
            <div className="top_artists__bar">
                <h1>Top Artists</h1>

            </div>
            <div className="top_artists__list">
                {
                    topArtists ? 
                    topArtists.items.map(artist =>(
                        <ArtistArtwork artist={artist}/>
                    )): <p>Loading .. </p>
                }
            </div>
            
            
        </div>
    )
}

export default TopArtists
