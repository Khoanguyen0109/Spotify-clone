import React from "react";
import "./artistsartwork.scss";
import { Link } from "react-router-dom";
function ArtistArtwork(props) {
  const { images, id, name } = props.artist;
  return (
    <div className="top-artist">
      <Link to={`/top-artists/${id}`}>
        <div className="top-artist-img">
          <img src={images[0].url} alt="Artist img" />
          <div className="artist-img-hover">
            <i class="fas fa-info-circle"></i>
          </div>
        </div>
      </Link>

      <div className="top-artist-name">
        <Link to={`/top-artists/${id}`}>{name}</Link>
      </div>
    </div>
  );
}

export default ArtistArtwork;
