import React, { useState, useEffect } from "react";
import { getTopTracksMedium } from "../../api";
import Track from "../../components/Track/Track";
import './toptrack.scss'
import Loader from "../../components/Loader/Loader";
function TopTracks() {
    const [tracks, setTracks] = useState()

    useEffect(()=>{
        getData()
    },[])
    async function getData (){
        const {data} = await getTopTracksMedium()
        setTracks(data.items)
    }

  return (
    <div className="top_tracks">
      <div className="top_tracks__bar">
        <h1>Top Tracks</h1>
      </div>
      <div className="top_tracks__list">
            {tracks ? tracks.map(track =>(
                <Track track ={track}/>
            )): <Loader/>  } 
      </div>
    </div>
  );
}

export default TopTracks;
