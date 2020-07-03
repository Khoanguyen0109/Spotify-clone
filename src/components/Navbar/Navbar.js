import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  token,
  getUserInfo,
  getUser,
  getTopArtistsLong,
  getTopTracksLong,
  logout,
} from "../../api";

const isActive = ({ isCurrent }) => (isCurrent ? { className: 'active' } : null);

const NavLink = props => <Link getProps={isActive} {...props} />;
function Navbar() {
  const LOGIN_URI = "http://localhost:8888/login";
 

  const [state, setState] = useState({
    user: null,
    followedArtists: null,
    playlists: null,
    topArtists: null,
    topTracks: null,
  });

  useEffect(() => {
    getData();
   
  }, []);
  async function getData() {
    const {
      user,
      followedArtists,
      playlists,
      topArtists,
      topTracks,
    } = await getUserInfo();
    setState({ user, followedArtists, playlists, topArtists, topTracks });
  }
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">Spotify</div>
        {token ? (
          <div className="user">
            {state.user ? (
              <div className="user__info">
                <div className="user__info-avatar">
                  <img src={state.user.images[0].url} alt="avatar" />
                </div>
                <div className="user__info-name">{state.user.display_name}</div>
              </div>
            ) : (
              <i class="fas fa-use\r"></i>
            )}{" "}
            <div className="btn-logout" onClick={logout}>
              {" "}
              Log Out
            </div>
          </div>
        ) : (
          <ul  className='nav-login'>
            <a href={LOGIN_URI}>
              <button className="btn-login">Login</button>
            </a>
            <a href="">
            <button className="btn-signup">Sing up</button>
            </a>
            
          </ul>
        )}

        <ul className='nav-tools'>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          {/* <Link to="/search">
            <li>Search</li>
          </Link> */}
          <NavLink to="/playlists">
            <li>Your Playlist</li>
          </NavLink>
          <NavLink to="/top-artists">
            <li>Artists</li>
            </NavLink>
          <NavLink to="/top-tracks">
          <li>Tracks</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
