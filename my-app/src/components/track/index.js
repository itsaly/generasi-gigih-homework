const Track = (props) => {
  const { name, artists, images } = props.track;

  return(
    <div>
      <img src={images[1].url} alt={name} />
      <p>Album title: {name}</p>
      <p>Artists: {artists[0].name}
      {
        (
          artists.length > 0
          ? (
            artists.slice(1).map(
              artist => {
                return(
                  <span key={artist.id}>, {artist.name}</span>
                )
              }
            )
          )
          : <span>{artists[0].name}</span>
        )
      }
      </p>
      <button type="submit">Select</button>
    </div>
  )
};

export default Track;