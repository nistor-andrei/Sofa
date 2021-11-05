import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMoviesImages, imageUrl } from "../../api/api";
import { Footer } from "../../Footer/Footer";
import { SlideRecommand } from "../../Slide/SlideRecommand";
import styles from "../tabs.module.scss";

export function Photo() {
  const { id } = useParams();
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getMoviesImages("movie", id);
      setPhotos(data);
    }
    getData();
  }, [id]);
  if (!photos) return <h2>Loading</h2>;

  console.log(photos.posters[0]);

  return (
    <section className="allMargin">
      <h2>Backdrops</h2>
      <div className={styles.gridPhoto}>
        {photos.backdrops.map((photo, key) => {
          return (
            key < 5 && (
              <div className={styles.gridItem} key={key}>
                <img src={imageUrl("w533_and_h300_bestv2") + photo.file_path} alt="backdrop" />
              </div>
            )
          );
        })}
      </div>
      <h2 className={styles.distance}>Posters</h2>
      <div className={styles.gridPhoto}>
        {photos.posters.map((poster, key) => {
          return (
            key <= 20 && (
              <div className={styles.gridItem} key={key}>
                <img src={imageUrl("w370_and_h556_bestv2") + poster.file_path} alt={poster.vote_average} />
              </div>
            )
          );
        })}
      </div>
      <section className={styles.distance}>
        <SlideRecommand title="More Like This" id={id} mediaType="movie" />
      </section>
      <section className={styles.distance}>
        <Footer />
      </section>
    </section>
  );
}

//w370_and_h556_bestv2
