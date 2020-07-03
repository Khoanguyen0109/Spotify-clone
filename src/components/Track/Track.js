import React from "react";
import "./track.scss";
import { formatDuration } from "../../utils";
import { Link } from "react-router-dom";
function Track(props) {
  const { album, artists,  name, id, duration_ms } = props.track;
  return (
    <div className="track">
      <div className="icon">
        <i className="fas fa-play"></i>
        <i className="fas fa-music"></i>
        <i className="fas fa-pause"></i>
      </div>
      <div className="track__img">
                <img src={album.images[2].url} alt="TrackImg"/>
          </div>
      <div className="track__info">
      
        <div className="track__info-name">{name}</div>
        <div className="track__info-info">
          {artists.map((artist) => (
            <Link to={`/top-artists/${artist.id}`}>
              <p className="artist">{artist.name}</p>
            </Link>
          ))}
          <p>
            {album.album_type}: {album.name}
          </p>
        </div>
      </div>
      <div className="track__time">
        <div>{formatDuration(duration_ms)}</div>
      </div>
    </div>
  );
}

export default Track;
