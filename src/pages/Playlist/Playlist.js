import React from "react";
import './playlist.scss'
import Track from "../../components/Track/Track";
function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist__des">
        <div className="playlist__img">
          <img
            src="https://images.unsplash.com/photo-1593113372819-91bc58901720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""
          />

        </div>
        <div className="playlist__info">
        <div className="playlist__info__name">
                PlayList Name
            </div>
            <div className="playlist__info__subject">
                Singer
            </div>
     
            <div className="playlist__info__detail">
                Detail
            </div>
            <div className="playlist__info__buttons-play">
              <a>Play on Spotify</a>
            </div>
        </div>
      </div>

      <div className="playlist_tracks">
         
         
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
      </div>
    </div>
  );
}

export default Playlist;
