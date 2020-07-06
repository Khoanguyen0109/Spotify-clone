import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";


import MusicControl from "./components/MusicControl/MusicControl";
import { logout, getUser } from "./api";
import Playlists from "./pages/Playlists/Playlists";
import PlaylistDetail from "./components/Playlist/Playlist";
import TopArtists from "./pages/TopArtists/TopArtists";
import ArtistsDetails from "./components/ArtistDetails/ArtistsDetails";
import TopTracks from "./pages/Toptracks/TopTracks";

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

        <MusicControl />
      </div>
    </Router>
  );
}

export default App;
