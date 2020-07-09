import { token } from "../api";


export function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;

}
// Format milliseconds into MM:SS
export const formatDuration = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Format milliseconds into X minutes and Y seconds
export const formatDurationForHumans = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes} Mins ${seconds} Secs`;
};


export default function initSDK(token) {
  const nameSDK = "Spotify React Client";
  this.player = new window.Spotify.Player({
    name: nameSDK,
    getOAuthToken: cb => {
      cb(token);
    }
  });

  // import("./lazyInitSDK").then(res => {
  //   res.default.bind(this)();
  // });
  this.player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
    this.setState({
      SDKconnected: true,
      deviceID: device_id,
      deviceName: nameSDK,
      player: this.player
    });
    return this.state.playerRequest("getDevices");
  });

  // Not Ready
  this.player.addListener("not_ready", ({ device_id }) => {
    console.error("Device ID has gone offline", device_id);
    this.setState({ SDKconnected: false });
  });

  // Connect to the player!
  this.player.connect().then(success => {
    if (success) console.log("SDK connected, waiting for ready...");
  });
}