import { useState } from "react";
import axios from 'axios';

import Track from '../track';

const Search = (token) => {
  const [text, setText] = useState('');
  const [albums, setAlbums] = useState([]);

  const handleChange = (event) => setText(event.target.value);
  const getAlbums = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get(`https://api.spotify.com/v1/search?q=${text}&type=album,artist,track`, config);
    setAlbums(result.data.albums.items);
  }

  return(
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={getAlbums}>Search</button>
      {
        albums && (
          albums.map(
            album => {
              return(
                <Track track={album} key={album.id} />
              );
            }
          )
        )
      }
    </div>
  )
}

export default Search;