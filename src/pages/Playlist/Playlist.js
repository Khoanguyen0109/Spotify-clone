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
        <div className="img-hover">
          <img
            src="https://lh3.googleusercontent.com/proxy/pZg6Ire9H7naAkkJWnXATb3VctvjenzjDD3nE5Q-E0jC81PmO4FG2_VdX5ypx7-Jea9He_5o7_pKZyjLCGp80O7rOop8b4qc8xc-Qahz4rb1_DxWgA"
            alt=""
          />
        </div>
        </div>
        <div className="playlist__info">
            <div className="playlist__info__subject">
                Subject
            </div>
            <div className="playlist__info__name">
                PlayList Name
            </div>
            <div className="playlist__info__detail">
                Detail
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
