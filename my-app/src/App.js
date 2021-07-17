import data from './data/track';
import Track from './components/track';
// import axios from "axios";

function App() {
  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);
  const showTrack = data.map(track => <Track imageUrl={track.album.images[1].url} album={track.album.name} song={track.name} artist={track.artists[0].name} key={track.album.id}/>);
  return (
    <div>
      {showTrack}
    </div>
  );
}

export default App;
