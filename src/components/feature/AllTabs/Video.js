import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getVideo, youtubeThumbnail } from "../../api/api";
import styles from "../tabs.module.scss";

export function Video() {
  const [videos, setVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getVideo("movie", id);

      setVideos(data);
    }

    getData();
  }, [id]);

  if (!videos) {
    return <h2>Loading...</h2>;
  }

  return (
    <main className={styles.videoGrid}>
      {videos.results.map((video) => {
        return (
          <div className={styles.gridItem}>
            <div className={styles.img}>
              <img src={youtubeThumbnail(video.key)} alt={video.name} className={styles.thumbnail} />
            </div>
            <p>{video.name}</p>
          </div>
        );
      })}
    </main>
  );
}
