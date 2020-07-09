import React from "react";
import "./nowplaying.scss";
import { Link } from "react-router-dom";
function NowPlaying(props) {

  const { name, url, image, artists } = props;
 
  return (
    <div className="now-playing">
      <div className="now-playing__img">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="now-playing__info">
        <a href={url} target="_blank">
          {name}
        </a>

        <p className="singer">
          {artists.map((artist) => (
            <Link to={`/top-artists/${artist.id}`}>
              <span>{artist.name}</span>{" "}
            </Link>
          ))}
        </p>
      </div>
      <div className="now-playing__toggle">
        <div className="now-playing__toggle-like">
          {/* <i class="far fa-heart"></i>
          <i class="fas fa-heart"></i> */}
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
