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

function Navbar() {
  const LOGIN_URI = "http://localhost:8888/login";
  let history = useHistory()

  const [state, setState] = useState({
    user: null,
    followedArtists: null,
    playlists: null,
    topArtists: null,
    topTracks: null,
  });
  
  useEffect(() => {
    getData();
    history.push('/')

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
              <i class="fas fa-user"></i>
            )}{" "}
            
            <div className="btn-logout" onClick={logout}>
              {" "}
             
              Log Out
            </div>
            
           
          </div>
        ) : (
          <ul>
            <a href={LOGIN_URI}>
              <button className="btn-login">Login</button>
            </a>
            <button className="btn-signup">Sing up</button>
          </ul>
        )}

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* <Link to="/search">
            <li>Search</li>
          </Link> */}
          <Link to ='/playlists'>
            <li>Your Playlist</li>
          </Link>
          <li>Top Artists</li>
          <li>Top Tracks</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
