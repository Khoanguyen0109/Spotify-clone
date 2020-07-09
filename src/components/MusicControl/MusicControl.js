import React, { useState, useRef, useEffect } from "react";
import NowPlaying from "./NowPlaying/NowPlaying";
import { play, token, getDevices } from "../../api/index";
import ToolBar from "./ToolsBar/ToolBar";
import "./musiccontrol.scss";
import PlayerControl from "./PlayerControl/PlayerControl";

function MusicControl() {
  const [nowPlaying, setNowPlaying] = useState({
    name: "No Played",
    albumArt: "",
    is_playing: false,
    artists: [],
    progress_ms: 0,
    duration_ms: 0,
  });
  
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);


  const [deviceId, setDeviceId] = useState();
  // const [player, setPlayer] = useState();

  // function checkForPlayer() {
  //   if (window.Spotify !== null) {
  //     clearInterval(playerCheckInterval);
  //     const player = new window.Spotify.Player({
  //       name: "Matt's Spotify Player",
  //       getOAuthToken: (cb) => {
  //         cb(token);
  //       },
  //     });
  //     console.log("player :>> ", player);
  //     // this.createEventHandlers();
  //     player.on("initialization_error", (e) => {
  //       console.error(e);
  //     });
  //     // problem authenticating the user.
  //     // either the token was invalid in the first place,
  //     // or it expired (it lasts one hour)
  //     player.on("authentication_error", (e) => {
  //       console.error(e);
  //       this.setState({ loggedIn: false });
  //     });
  //     // currently only premium accounts can use the API
  //     player.on("account_error", (e) => {
  //       console.error(e);
  //     });
  //     // loading/playing the track failed for some reason
  //     player.on("playback_error", (e) => {
  //       console.error(e);
  //     });

  //     // Playback status updates
  //     player.on("player_state_changed", (state) => this.onStateChanged(state));

  //     // Ready
  //     player.on("ready", async (data) => {
  //       let { device_id } = data;
  //       console.log("Let the music play on!");
  //       // set the deviceId variable, then let's try
  //       // to swap music playback to *our* player!

  //       // transferPlaybackHere();
  //     });
  //     // finally, connect!
  //     player.connect();
  //   }
  // }

  
  // const playerCheckInterval = setInterval(() => checkForPlayer(), 1000);
  useEffect(() => {
    // checkForPlayer()
    getData();
  });

  async function getData() {
    const { data } = await getDevices();
    if (data) {
      console.log('data :>> ', data);
      setDeviceId(data.devices[0].id)
      // setNowPlaying({
      //   name: data.item.name,
      //   image: data.item.album.images[2].url,
      //   is_playing: data.is_playing,
      //   artists: data.item.artists,
      //   progress_ms: data.progress_ms,
      //   duration_ms: data.item.duration_ms,
      //   url : data.item.external_urls.spotify
      // });
    }
  }



  console.log('deviceId :>> ', deviceId);
  return (
    <div className="control-bar">
      <div className="now-playing">
        <NowPlaying name={nowPlaying.name} url={nowPlaying.url} image={nowPlaying.image} artists={nowPlaying.artists} />
      </div>
      <div className="player-control">
        <PlayerControl
          is_playing={nowPlaying.is_playing}
          progress_ms={nowPlaying.progress_ms}
          duration_ms={nowPlaying.duration_ms}
        />
      </div>
      <div className="tool-bar">
        <ToolBar />
      </div>
    </div>
  );
}

export default MusicControl;
