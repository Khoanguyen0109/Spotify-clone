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

import Search from "./pages/Search/Search";
import MusicControl from "./components/MusicControl/MusicControl";
import { token } from "./api";
import Playlists from "./pages/Playlists/Playlists";
import PlaylistDetail from "./components/Playlist/Playlist";
import TopArtists from "./components/TopArtists/TopArtists";
import ArtistsDetails from "./components/TopArtists/ArtistDetails/ArtistsDetails";

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
                <Playlists/>
              </Route>
              <Route  path="/search">
                <Search />
              </Route>
              <Route exact  path="/playlists/:id"  >
                <PlaylistDetail/>
              </Route>
              <Route exact path ='/topartists' >
                <TopArtists/>
              </Route>
              <Route exact path ='/top-artists/:artistId' >
                <ArtistsDetails/>
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
