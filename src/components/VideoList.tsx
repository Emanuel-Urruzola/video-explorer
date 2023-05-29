import VideoItem from "./VideoItem"
import { getVideos } from '../Data/videos.js'
import { useEffect, useState } from "react";

interface itemVideo {
  name: String,
  path: String
}

function VideoList() {
  const [video, setVideo] = useState<itemVideo[] | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const videos = await getVideos();
      console.log(videos);
      if (Array.isArray(videos))
        setVideo(videos);
      else
        setVideo(null);
    };

    fetchData();
  }, []);
  return (
    <section>
      {
        video
          ? video.map((item: itemVideo) => {
            return (<VideoItem key={String(item.name)} name={item.name} path={item.path} />);
          })
          : <h1>Loading...</h1>
      }
    </section>
  )
}

export default VideoList