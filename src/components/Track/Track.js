import React from "react";
import "./track.scss";
import { formatDuration } from "../../utils";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
function Track(props) {
  // const { album, artists,  name, id, duration_ms } = props.track;
  const track = props.track
  // const { album, artists,  name, id, duration_ms } = track;
  return (
    <div>
      {track ?  <div className="track">
      <div className="icon">
        <i className="fas fa-play"></i>
        <i className="fas fa-music"></i>
        <i className="fas fa-pause"></i>
      </div>
      <div className="track__img">
                <img src={track.album.images[2].url} alt="TrackImg"/>
          </div>
      <div className="track__info">
      
        <div className="track__info-name">{track.name}</div>
        <div className="track__info-info">
          {track.artists.map((artist) => (
            <Link to={`/top-artists/${artist.id}`}>
              <p className="artist">{artist.name}</p>
            </Link>
          ))}
          <p>
            {track.album.album_type}: {track.album.name}
          </p>
        </div>
      </div>
      <div className="track__time">
        <div>{formatDuration(track.duration_ms)}</div>
      </div>
    </div>: <Loader/>}
    </div>
   
  );
}

export default Track;
