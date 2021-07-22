const AUTH_LINK = 'https://accounts.spotify.com/id/authorize?response_type=token&show_dialog=true';
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SCOPE = 'playlist-modify-private';
const REDIRECT_URI = 'http://localhost:3000/';

export {
  AUTH_LINK,
  CLIENT_ID,
  SCOPE,
  REDIRECT_URI
}