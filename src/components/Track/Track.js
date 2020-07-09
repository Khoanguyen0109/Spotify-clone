import React, { useEffect, useState } from "react";
import "./track.scss";
import { formatDuration } from "../../utils";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDevices, token } from "../../api";
import Axios from "axios";
function Track(props) {
  const track = props.track;

  const [deviceId, setDeviceId] = useState();
  console.log('track :>> ', track);
  // useEffect(() => {
  //   getData();
  // },[]);
 
  // async function getData() {
  //   const { data } = await getDevices();
  //   if (data.devices) {
  //     console.log('trackDevice :>> ', data);
  //     setDeviceId(data.devices[0].id)
  //   }
  // }
  const handlePlay = () => {
    const offset =0;
     const uris= track.uri
    let body;
    body = JSON.stringify({ uris, offset: { position: offset } });
    // if (context_uri) {
    //   const isArtist = context_uri.indexOf('artist') >= 0;
    //   let position;
  
    //   if (!isArtist) {
    //     position = { position: offset };
    //   }
  
    //   body = JSON.stringify({ context_uri, offset: position });
    // } else if (Array.isArray(uris) && uris.length) {
    //   body = JSON.stringify({ uris, offset: { position: offset } });
    // }
  
    return Axios(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      body,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });
  
  };
  return (
    <div>
      {track ? (
        // <a  href={track.external_urls.spotify}
        // target="_blank">
        <div className="track">
          <div className="icon">
            <i className="fas fa-play"></i>
            <i className="fas fa-music"></i>
            <i className="fas fa-pause"></i>
          </div>
          <div className="track__img">
            <img src={track.album.images[2].url} alt="TrackImg" />
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
        </div>
        // </a>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Track;
