import React from "react";
import "./playlistcard.scss";
import { useHistory, Link } from "react-router-dom";
function PlaylistCard(props) {
  const { id,description, images, name, tracks } = props.playlist
  console.log('id :>> ', id);

  const handlePlay = () => {
    alert("Play");
  };

  return (
    <div className="playlist__card">
      <div className="playlist__card__img" onClick={handlePlay}>
      <Link to={`/playlists/${id}`} >
        <img
          src={images[0].url}
          alt="playlistimg"
        />
         </Link>
      </div>
      <Link to={`/playlists/${id}`} >
        <div className="playlist__card__name">{name}</div>
        </Link>

  <div className="playlist__card__info">Tracks {tracks.total}</div>
    </div>
  );
}

export default PlaylistCard;
