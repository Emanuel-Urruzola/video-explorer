import VideoItem from "./VideoItem"
import { holaMundo } from '../Data/videos.js'
import { useEffect, useState } from "react";

function VideoList() {
  const [video, setVideo] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const videos = await holaMundo();
      console.log(videos);
      setVideo(videos);
    };

    fetchData();
  }, []);
  return (
    <section>
      {
        video
          ? video.map((item) => {
            return (<VideoItem key={item.name} name={item.name} path={item.path} />);
          })
          : <h1>Loading...</h1>
      }
    </section>
  )
}

export default VideoList