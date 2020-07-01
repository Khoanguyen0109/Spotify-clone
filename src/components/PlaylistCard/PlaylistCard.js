import React from "react";
import './playlistcard.scss';
import { useHistory, Link } from "react-router-dom";
function PlaylistCard() {
  const history= useHistory()
  const handlePlay=()=>{
    alert('Play')
  }


  return (
    <div className="playlist__card">
      <div className="playlist__card__img" onClick={handlePlay}>
        <img
          src="https://images.unsplash.com/photo-1593069369643-a6d42e2e3cb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="playlistimg"
        />
        <div className="playlist__card__img-hover" >
          <img
            src="https://lh3.googleusercontent.com/proxy/pZg6Ire9H7naAkkJWnXATb3VctvjenzjDD3nE5Q-E0jC81PmO4FG2_VdX5ypx7-Jea9He_5o7_pKZyjLCGp80O7rOop8b4qc8xc-Qahz4rb1_DxWgA"
            alt=""
          />
        </div>

        
      </div>
      <Link to='/playlist' >
      <div className="playlist__card__name" >Play list</div>
      </Link>
      
      <div className="playlist__card__info">Info</div>
    </div>
  );
}

export default PlaylistCard;
