import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">Spotify</div>

        <ul >
          <button className="btn-login">Login</button>
          <button className ="btn-signup">Sing up</button>
        </ul>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Top Artists</li>
          <li>Top Tracks</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
