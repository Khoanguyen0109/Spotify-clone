import React, { useState, useEffect } from "react";



import { useHistory, Link } from "react-router-dom";
import { getCategories, getFeaturePlaylist, search, getUser } from "../../api";
import Search from "../Search/Search";
import Loader from "../../components/Loader/Loader";

function Homepage(props) {
  const [categories, setCategories] = useState();
  const [playlists, setPlaylists] = useState();
  const [searchText, setSearchText] = useState("");

  const [dataSearch, setDataSearch] = useState();
  // const [morePlaylist, setMorePlaylist] = useState(false);

  // const handleMorePlaylist = () => {
  //   setMorePlaylist(!morePlaylist);
  // };

  let history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    searchData(searchText);
  };

  useEffect(() => {
    getCategoriesData();
    getFeaturePlaylistData();

    history.push("/");
  }, []);

  async function searchData(searchText) {
    const { data } = await search(searchText);
    setDataSearch(data);
  }
  async function getCategoriesData() {
    const { data } = await getCategories();
    setCategories(data.categories);
  }
  async function getFeaturePlaylistData() {
    const { data } = await getFeaturePlaylist();
    setPlaylists(data.playlists);
  }

  console.log("data :>> ", dataSearch);
  return (
    <div className="homepage">
      <div className="bar">
        <form class="searchBox" onSubmit={handleSearch}>
          <button class="searchButton" type="submit" href="#">
            <i class="material-icons">search</i>
          </button>
          <input
            type="submit"
            class="searchInput"
            onChange={(event) => setSearchText(event.target.value)}
            style={
              searchText ? { width: "fit-content", marginLeft: "10px" } : null
            }
            type="text"
            name=""
            placeholder="Search"
          />
        </form>
      </div>

      {dataSearch ? (
        <Search data={dataSearch} />
      ) : (
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
                <Loader />
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
      )}
    </div>
  );
}

export default Homepage;
