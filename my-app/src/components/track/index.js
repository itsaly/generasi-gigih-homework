const Track = ({imageUrl, album, song, artist}) => {
  return (
    <div>
      <img src={imageUrl} alt={album} />
      <p>Song title: {song}</p>
      <p>Song artists: {artist}</p>
      <button type="submit">Select</button>
    </div>
  )
};

export default Track;