import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCreditsCombined, imageUrl } from "../../api/api";
import placeholder from "../../../assets/image/Group 3406.png";
import styles from "../alltabs.module.scss";
import star from "../../../assets/icons/star-solid.svg";
import { Link } from "react-router-dom";

export function Known() {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getCreditsCombined(id);
      setCredits(data);
    }

    getData();
  }, [id]);

  if (!credits) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className={styles.knowList}>
      {credits.cast.map((credit, index) => {
        return (
          <li key={index}>
            <Link to={`/${credit.media_type}/${credit.id}`}>
              <img src={credit.poster_path ? imageUrl("w370_and_h556_bestv2") + credit.poster_path : placeholder} alt={credit.title} />
              <p>{credit.title}</p>
              {credit.vote_average !== 0 ? (
                <p>
                  <img src={star} alt={credit.name} />
                  {credit.vote_average}
                </p>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
