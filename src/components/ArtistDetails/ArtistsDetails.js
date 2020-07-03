import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtist, getArtistTopTrack } from "../../api";
import Track from "../Track/Track";

function ArtistsDetails() {
  const param = useParams();
  const artistId = param.artistId;
  const [artist, setArtist] = useState({
    name: null,
    images: null,
    followers: null,
    genres: [],
  });
  const [tracks, setTracks] = useState();

  useEffect(() => {
    getArtistData(artistId);
    getArtistTopTracksData(artistId);
  }, [artistId]);
  
  async function getArtistData(artistId) {
    const { data } = await getArtist(artistId);
    setArtist({
      name: data.name,
      images: data.images[2].url,
      genres: data.genres,
      followers: data.followers.total,
    });
  }

  async function getArtistTopTracksData(artistId) {
      const {data} = await getArtistTopTrack (artistId)
      setTracks(data.tracks)
  }
  

  console.log('tracks :>> ', tracks);
  return (
    <div>
      {artist ? (
        <div className="artist_details">
          <div className="artist_details_info">
            <div className="artist_details_info__img">
              <img src={artist.images} alt="Artist Img" />
            </div>
            <div className="artist_details_info__info">
              <h1>{artist.name}</h1>
              <h2>{artist.followers}</h2>
              <ul>
                {artist.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="artist_details_top_tracks">
                {tracks? tracks.map(track => (
                    <Track track={track}/>
                )) : <p>Loading..</p>}

          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default ArtistsDetails;
