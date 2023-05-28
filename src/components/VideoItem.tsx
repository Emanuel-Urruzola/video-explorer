import { invoke } from '@tauri-apps/api/tauri';

const seeVideo = (video) => {
  invoke('run_node_script', { videoPath: video })
    .then(response => {
      console.log('Archivo ejecutado:', response);
    })
    .catch(error => {
      console.error('Error al ejecutar archivo:', error);
    });
}
function VideoItem({ name, path }) {
  return (
    <article onClick={() => { seeVideo(path) }}>
      <img src={`src/thumbnails/${name.slice(0, - 3)}png`} alt="video de entrenamiento" />
      <strong>{name}</strong>
    </article>
  )
}

export default VideoItem