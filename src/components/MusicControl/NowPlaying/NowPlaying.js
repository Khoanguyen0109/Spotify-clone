import React from "react";
import "./nowplaying.scss";
function NowPlaying() {
  return (
    <div className="now-playing">
      <div className="now-playing__img">
        <img
          src="https://images.unsplash.com/photo-1590659235380-1b4300fe6238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
      </div>
      <div className="now-playing__info">
        <a href="#">Song</a>
  
          <p  className="singer">Singer</p>
        
      </div>
      <div className="now-playing__toggle">
        <div className="now-playing__toggle-like">
          <i class="far fa-heart"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
