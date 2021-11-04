import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getVideo, youtubeThumbnail } from "../../api/api";
import styles from "../tabs.module.scss";
import { SlideRecommand } from "../../Slide/SlideRecommand";
import { Footer } from "../../Footer/Footer";
import { Modal } from "../Modal/Modal";

export function Video() {
  const [videos, setVideos] = useState();
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [key, setKey] = useState();

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
  console.log(key);
  return (
    <>
      <Modal isOpen={modal} close={setModal} id={key} />;
      <main className={styles.videoGrid}>
        {videos.results.map((video) => {
          return (
            <div className={styles.gridItem} key={video.id}>
              <div className={styles.img}>
                <img src={youtubeThumbnail(video.key)} alt={video.name} className={styles.thumbnail} />
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  width="400px"
                  height="400px"
                  data-icon="play-circle"
                  className="svg-inline--fa fa-play-circle fa-w-16 playButton"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  onClick={() => {
                    setKey(video.key);
                    setModal(!modal);
                  }}
                >
                  <path
                    fill="#fff"
                    d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
                  ></path>
                </svg>
              </div>
              <p>{video.name}</p>
            </div>
          );
        })}
      </main>
      <section className="allMargin">
        <SlideRecommand mediaType="movie" id={id} title="More like this" />
      </section>
      <Footer />
    </>
  );
}
