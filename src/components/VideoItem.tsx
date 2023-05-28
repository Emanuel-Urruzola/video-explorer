function VideoItem({ name }) {
  return (
    <article>
      <img src={`src/thumbnails/${name.slice(0, - 3)}png`} alt="video de entrenamiento" />
      <strong>{name}</strong>
    </article>
  )
}

export default VideoItem