import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from './pages/Homepage/Homepage'
import Login from "./pages/Login/Login";
import Playlist from "./pages/Playlist/Playlist";
import Search from "./pages/Search/Search";



function App() {
  return (
    <Router>
      <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/playlist">
            <Playlist/>
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
        </Switch>
       
      </div>
      <div className='musicControl'>
            Music Control
      </div>
    </div>
    </Router>
    
  );
}

export default App;
