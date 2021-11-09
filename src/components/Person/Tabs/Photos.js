import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPersonImage, imageUrl } from "../../api/api";
import styles from "../alltabs.module.scss";

export function Photos() {
  const { id } = useParams();
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getPersonImage(id);
      setImages(data);
    }

    getData();
  }, [id]);

  if (!images) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className={styles.imageList}>
      {images.profiles.map((profile) => {
        return (
          <li>
            <img src={imageUrl() + profile.file_path} alt={profile.vote_average} />
          </li>
        );
      })}
    </ul>
  );
}
