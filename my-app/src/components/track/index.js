const Track = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt={props.album} />
      <p>Song title: {props.song}</p>
      <p>Song artists: {props.artist}</p>
      <button type="submit">Select</button>
    </div>
  )
};

export default Track;