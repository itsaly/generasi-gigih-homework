// import logo from './logo.svg';
import './App.css';
import data from './data/track';
import Track from './components/track';
// import axios from "axios";

function App() {
  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);
  return (
    <div>
      <Track imageUrl={data.album.images[1].url} album={data.album.name} song={data.name} artist={data.artists[0].name}/>
    </div>
  );
}

export default App;
