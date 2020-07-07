import React, { useState } from "react";
import "./search.scss";
import ArtistArtwork from "../../components/ArtistArtwork/ArtistArtwork";
import Track from "../../components/Track/Track";
function Search(props) {
  const [moreArtists, setMoreArtists] = useState(false);

  const [moreTracks, setMoreTracks] = useState(false)
  const handelMoreArtist = () => {
    setMoreArtists(!moreArtists);
  };

  const handleMoreTracks = () => {
    setMoreTracks(!moreTracks);
  };

  const { artists, tracks } = props.data;
  console.log("tracks :>> ", tracks);
  return (
    <div className="search__details">
      <h1>Artists </h1>
      <div className="search__details__artists">
        {moreArtists
          ? artists.items.map((artist) => <ArtistArtwork artist={artist} />)
          : artists.items
              .slice(0, 8)
              .map((artist) => <ArtistArtwork artist={artist} />)}
      </div>
      <div className='btn'>
      <button onClick={handelMoreArtist}>{moreArtists? <h1>Less </h1> :<h1>More</h1>}</button>

      </div>
      <h1>Tracks</h1>
      <div className="search__details__tracks">
      {moreTracks
          ? tracks.items.map((track) => <Track track={track} />)
          : tracks.items
              .slice(0, 10)
              .map((track) => <Track track={track} />)}
      </div>    
      <div className='btn'>
      <button onClick={handleMoreTracks}>{moreTracks? <h1>Less </h1> :<h1>More</h1>}</button>

      </div>
    </div>
  );
}

export default Search;
