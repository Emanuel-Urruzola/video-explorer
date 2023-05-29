import { invoke } from '@tauri-apps/api/tauri';
interface VideoItemProps {
  name: String,
  path: String
}
const seeVideo = (video: String) => {
  invoke('run_node_script', { videoPath: video })
    .then(response => {
      console.log('Archivo ejecutado:', response);
    })
    .catch(error => {
      console.error('Error al ejecutar archivo:', error);
    });
}
function VideoItem({ name, path }: VideoItemProps) {
  return (
    <article onClick={() => { seeVideo(path) }}>
      <img src={
        process.env.TAURI_DEV
          ? `public/thumbnails/${name.slice(0, - 3)}png`
          : `/thumbnails/${name.slice(0, - 3)}png`}
        alt="video de entrenamiento" />
      <strong>{name}</strong>
    </article>
  )
}

export default VideoItem