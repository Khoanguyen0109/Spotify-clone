import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Script from "react-load-script";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./screens/Homepage/Homepage";
import Login from "./screens/Login/Login";

import MusicControl from "./components/MusicControl/MusicControl";
import { logout, play, token, getDevices } from "./api";
import Playlists from "./screens/Playlists/Playlists";
import PlaylistDetail from "./components/PlaylistDetails/Playlist";
import TopArtists from "./screens/TopArtists/TopArtists";
import ArtistsDetails from "./components/ArtistDetails/ArtistsDetails";
import TopTracks from "./screens/Toptracks/TopTracks";
// import { checkForPlayer } from "./utils";


const accessToken = localStorage.spotify_access_token;
const timestamp = localStorage.spotify_token_timestamp;

if (accessToken) {
  if (timestamp * 1000 < Date.now()) {
    logout();
  }
}

function App() {

  return (
    <Router>
      <div className="outerWrap">
        <div className="App">
          <div className="navbar">
            <Navbar />
          </div>
          {/* <button onClick={checkForPlayer}>Check</button> */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/playlists">
                <Playlists />
              </Route>
              <Route exact path="/playlists/:id">
                <PlaylistDetail />
              </Route>
              <Route exact path="/top-artists">
                <TopArtists />
              </Route>
              <Route exact path="/top-artists/:artistId">
                <ArtistsDetails />
              </Route>
              <Route exact path="/top-tracks">
                <TopTracks />
              </Route>
            </Switch>
          </div>
        </div>
        <div className="music-control">
          <MusicControl />
        </div>
      </div>
    </Router>
  );
}

export default App;
