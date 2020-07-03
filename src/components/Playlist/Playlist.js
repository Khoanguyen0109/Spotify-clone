import React, { useState, useEffect } from "react";
import "./playlist.scss";
import Track from "../Track/Track";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../api";
function Playlist() {
  const param = useParams();
  const playlistId = param.id;
 
  useEffect(() => {
    getData(playlistId);
  }, []);
  const [playlist, setPlaylist] = useState();

  async function getData(playlistId) {
    const { data } = await getPlaylist(playlistId);

    setPlaylist(data);
  }

  console.log('playlist :>> ', playlist);
  return (
    <div>
      {playlist ? (
        <div className="playlist">
          <div className="playlist__des">
            <div className="playlist__img">
              <img src={playlist.images[0].url} alt="" />
            </div>
            <div className="playlist__info">
              <div className="playlist__info__name">
                {playlist.name}
                <hr />
              </div>
              <div className="playlist__info__subject">
                By {playlist.owner.display_name}
              </div>

              <div className="playlist__info__detail">
                {" "}
                Tracks: {playlist.tracks.total}
              </div>
              <div className="playlist__info__buttons-play">
                <a>Play on Spotify</a>
              </div>
            </div>
          </div>

          <div className="playlist__tracks">
            { playlist ? playlist.tracks.items.map(track => (
              <Track track ={track.track}/>
            )): <p>Loading...</p>}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Playlist;
