// import logo from './logo.svg';
import './App.css';
import data from './data.js';
// import axios from "axios";

function App() {
  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);
  return (
    <div>
      <img src={data.album.images[1].url} alt={data.album.name} />
      <p>Song title: {data.name}</p>
      <p>Song artists: {data.artists[0].name}</p>
      <button type="submit">Select</button>
    </div>
  );
}

export default App;
