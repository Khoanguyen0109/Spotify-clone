import React, { useState, useEffect } from "react";

import "./homepage.scss";

import { useHistory, Link } from "react-router-dom";
import { getCategories, getFeaturePlaylist } from "../../api";

function Homepage(props) {
  const [categories, setCategories] = useState();
  const [playlists, setPlaylists] = useState();
  const [searchText, setSearchText] = useState('')


  let history = useHistory();
  useEffect(() => {
    getCategoriesData();
    getFeaturePlaylistData();
    history.push("/");
  }, []);
  async function getCategoriesData() {
    const { data } = await getCategories();
    setCategories(data.categories);
  }
  async function getFeaturePlaylistData() {
    const { data } = await getFeaturePlaylist();
    setPlaylists(data.playlists);
  }
 
  
  return (
    <div className="homepage">
      <div className="bar">
        <div class="searchBox">
          <button class="searchButton" href="#">
            <i class="material-icons">search</i>
          </button>
          <input class="searchInput" type="text" name="" placeholder="Search" />
        </div>
      </div>

      <div className="homepage__details">
        <div className="featured-playlist">
          <h1>Featured-playlist</h1>
          <div className="featured-playlist__list">
            {playlists ? (
              playlists.items.map((playlist) => (
                <div className="featured-playlist__list-card">
                  <div className="featured-playlist__list-card_img">
                  <Link to={`/playlists/${playlist.id}`}>
                    <img src={playlist.images[0].url} alt="playlist Img" />
                    </Link>
                  </div>
                  <div className="featured-playlist__list-card_info">
                  <Link to={`/playlists/${playlist.id}`}>
                      <h2>{playlist.name}</h2>
                    </Link>

                    <h5>{playlist.description}</h5>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className="categories">
          <h1> Categories</h1>
          <div className="categories__list">
            {categories ? (
              categories.items.map((category) => (
                <div className="category">
                  <Link to={`/categories/${category.id}`}>
                    <h1> {category.name}</h1>
                  </Link>
                </div>
              ))
            ) : (
              <p className=""> Loading..</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
