import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMoviesImages, imageUrl } from "../../api/api";
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

  console.log(photos);

  return (
    <section className="allMargin">
      <div className={styles.gridPhoto}>
        {photos.backdrops.map((photo, key) => {
          return (
            key < 5 && (
              <div className={styles.gridItem}>
                <img src={imageUrl("w370_and_h556_bestv2") + photo.file_path} alt="backdrop" key={key} />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
}

// key < 5 && <img src={imageUrl("w370_and_h556_bestv2") + photo.file_path} alt="backdrop" key={key} />
// {photos?.backdrops.map((photo, key) => {
