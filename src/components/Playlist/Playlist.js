import React from "react";
import "./playlist.scss";
function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist__img">
        <img
          src="https://images.unsplash.com/photo-1593069369643-a6d42e2e3cb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="playlistimg"
        />
        <div className='img-hover'>
        <img 
         
          src="https://lh3.googleusercontent.com/proxy/pZg6Ire9H7naAkkJWnXATb3VctvjenzjDD3nE5Q-E0jC81PmO4FG2_VdX5ypx7-Jea9He_5o7_pKZyjLCGp80O7rOop8b4qc8xc-Qahz4rb1_DxWgA"
          alt=""
        />
        </div>
 
        <div className="img=hover"></div>
      </div>
      <div className="playlist__name">Play list</div>
      <div className="playlist__info">Info</div>
    </div>
  );
}

export default Playlist;
