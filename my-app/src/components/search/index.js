import { Component } from "react";
import axios from 'axios';

import Track from '../track';

class Search extends Component {
  constructor(props) {
    super(props);
    this.token = props.token;
    this.state = {
      search: '',
      tracks: null,
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  handleClick = async (e) => {
    const { search } = this.state;
    const config = {
      headers: { Authorization: `Bearer ${this.token}` }
    };
    const result = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=album,artist,track`, config);
    // let tracksArtistsAlbums = (result.data.tracks.items.concat(result.data.artists.items)).concat(result.data.albums.items);
    this.setState({
      tracks: result.data.albums.items,
    })

    console.log(this.state.tracks);
  }

  render() {
    const { tracks } = this.state;
    return(
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        {
          tracks && (
            tracks.map(
              track => {
                return(
                  <Track track={track} key={track.id} />
                );
              }
            )
          )
        }
      </div>
    )
  }
}

export default Search;