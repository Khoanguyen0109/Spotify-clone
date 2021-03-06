import { getHashParams } from "../utils/index";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds
const setTokenTimestamp = () =>
  window.localStorage.setItem("spotify_token_timestamp", Date.now());
const setLocalAccessToken = (token) => {
  setTokenTimestamp();
  window.localStorage.setItem("spotify_access_token", token);
};
const setLocalRefreshToken = (token) =>
  window.localStorage.setItem("spotify_refresh_token", token);
const getTokenTimestamp = () =>
  window.localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () =>
  window.localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () =>
  window.localStorage.getItem("spotify_refresh_token");

const refreshAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${getLocalRefreshToken()}`
    );
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

export const token = getAccessToken();
export function getAccessToken() {
  const { error, access_token, refresh_token } = getHashParams();

  if (error) {
    console.error(error);
    refreshAccessToken();
  }

  // If token has expired
  if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing...");
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  // If there is no REFRESH token in local storage, set it as `refresh_token` from params
  if (!localRefreshToken || localRefreshToken === "undefined") {
    setLocalRefreshToken(refresh_token);
  }

  // If there is no ACCESS token in local storage, set it and return `access_token` from params
  if (!localAccessToken || localAccessToken === "undefined") {
    setLocalAccessToken(access_token);
    return access_token;
  }

  return localAccessToken;
}

export const logout = () => {
  window.localStorage.removeItem("spotify_token_timestamp");
  window.localStorage.removeItem("spotify_access_token");
  window.localStorage.removeItem("spotify_refresh_token");

  window.location.reload();
};

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
export const search  = (searchText) =>
  axios.get(`https://api.spotify.com/v1/search?q=${searchText}&type=track%2Cartist&limit=20&offset=0`, { headers });


export const getUser = () =>
  axios.get("https://api.spotify.com/v1/me", { headers });

export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", { headers });

export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played", {
    headers,
  });
export const getFeaturePlaylist = () =>
  axios.get(
    "https://api.spotify.com/v1/browse/featured-playlists?limit=5&offset=0",
    {
      headers,
    }
  );

export const getCategories = () =>
  axios.get("https://api.spotify.com/v1/browse/categories?country=VN&limit=20&offset=0", {
    headers,
  });

export const getPlaylists = () =>
  axios.get("https://api.spotify.com/v1/me/playlists", { headers });

export const getTopArtistsShort = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
    {
      headers,
    }
  );

export const getTopArtistsMedium = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",
    {
      headers,
    }
  );

export const getTopArtistsLong = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",
    { headers }
  );

export const getTopTracksShort = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",
    { headers }
  );
export const getTopTracksMedium = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",
    {
      headers,
    }
  );
export const getTopTracksLong = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",
    { headers }
  );

export const getArtist = (artistId) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

export const getArtistTopTrack = (artistId) =>
  axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=VN`, { headers });

export const followArtist = (artistId) => {
  const url = `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`;
  return axios({ method: "put", url, headers });
};

export const doesUserFollowArtist = (artistId) =>
  axios.get(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`,
    {
      headers,
    }
  );

export const doesUserFollowPlaylist = (playlistId, userId) =>
  axios.get(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`,
    {
      headers,
    }
  );

export const createPlaylist = (userId, name) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const data = JSON.stringify({ name });
  return axios({ method: "post", url, headers, data });
};

export const addTracksToPlaylist = (playlistId, uris) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris}`;
  return axios({ method: "post", url, headers });
};

export const followPlaylist = (playlistId) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
  return axios({ method: "put", url, headers });
};

/**
 * Get a Playlist
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/
 */
export const getPlaylist = (playlistId) =>
  axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers });

/**
 * Get a Playlist's Tracks
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
 */
export const getPlaylistTracks = (playlistId) =>
  axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers,
  });

/**
 * Return a comma separated string of track IDs from the given array of tracks
 */
const getTrackIds = (tracks) => tracks.map(({ track }) => track.id).join(",");

/**
 * Get Audio Features for Several Tracks
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/
 */
export const getAudioFeaturesForTracks = (tracks) => {
  const ids = getTrackIds(tracks);
  return axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids}`, {
    headers,
  });
};

/**
 * Get Recommendations Based on Seeds
 * https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
 */
export const getRecommendationsForTracks = (tracks) => {
  const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
  const seed_tracks = getTrackIds(shuffledTracks.slice(0, 5));
  const seed_artists = "";
  const seed_genres = "";

  return axios.get(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}&seed_artists=${seed_artists}&seed_genres=${seed_genres}`,
    {
      headers,
    }
  );
};

/**
 * Get a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
 */
export const getTrack = (trackId) =>
  axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

/**
 * Get Audio Analysis for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/
 */
export const getTrackAudioAnalysis = (trackId) =>
  axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
    headers,
  });

/**
 * Get Audio Features for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/
 */
export const getTrackAudioFeatures = (trackId) =>
  axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
    headers,
  });

export const getUserInfo = () => {
  return axios
    .all([
      getUser(),
      getFollowing(),
      getPlaylists(),
      getTopArtistsLong(),
      getTopTracksLong(),
    ])
    .then(
      axios.spread(
        (user, followedArtists, playlists, topArtists, topTracks) => {
          return {
            user: user.data,
            followedArtists: followedArtists.data,
            playlists: playlists.data,
            topArtists: topArtists.data,
            topTracks: topTracks.data,
          };
        }
      )
    );
};

export const getTrackInfo = (trackId) => {
  return axios
    .all([
      getTrack(trackId),
      getTrackAudioAnalysis(trackId),
      getTrackAudioFeatures(trackId),
    ])
    .then(
      axios.spread((track, audioAnalysis, audioFeatures) => {
        return {
          track: track.data,
          audioAnalysis: audioAnalysis.data,
          audioFeatures: audioFeatures.data,
        };
      })
    );
};
