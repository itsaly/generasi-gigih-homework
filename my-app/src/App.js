// import data from './data/track';
import Login from './components/login';
// import { Login } from './components/login'
// import axios from "axios";

function App() {
  // const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  // console.log(spotify_client_id);
  // const showTrack = data.map(track => <Track imageUrl={track.album.images[1].url} album={track.album.name} song={track.name} artist={track.artists[0].name} key={track.album.id}/>);
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
