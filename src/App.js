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
import Playlist from "./components/Playlist/Playlist";
import Search from "./pages/Search/Search";
import MusicControl from "./components/MusicControl/MusicControl";
import { token } from "./api";
import Playlists from "./pages/Playlists/Playlists";

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
              <Route exact to='/playlists'>
                <Playlists/>
              </Route>
              <Route exact path="/playlists/:playlistId">
                <Playlist />
              </Route>
              <Route exact path="/search">
                <Search />
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
