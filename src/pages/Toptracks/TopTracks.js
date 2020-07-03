import React, { useState, useEffect } from "react";
import { getTopTracksMedium } from "../../api";
import Track from "../../components/Track/Track";
import './toptrack.scss'
function TopTracks() {
    const [tracks, setTracks] = useState()

    useEffect(()=>{
        getData()
    },[])
    async function getData (){
        const {data} = await getTopTracksMedium()
        setTracks(data.items)
    }
    console.log('tracks :>> ', tracks);
  return (
    <div className="top_tracks">
      <div className="top_tracks__bar">
        <h1>Top Tracks</h1>
      </div>
      <div className="top_tracks__list">
            {tracks ? tracks.map(track =>(
                <Track track ={track}/>
            )): <p>Loading ...</p>  } 
      </div>
    </div>
  );
}

export default TopTracks;
