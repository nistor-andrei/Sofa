import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCreditsCombined } from "../../api/api";
import styles from "../alltabs.module.scss";

export function Credits() {
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

  function sortCredits(items) {
    // sort items in the group by date
    return items.sort((a, b) => {
      const aDate = a.release_date ? a.release_date : a.first_air_date;
      const bDate = b.release_date ? b.release_date : b.first_air_date;
      if (aDate > bDate) {
        return -1;
      } else if (aDate < bDate) {
        return 1;
      }
      return 0;
    });
  }
  const ascendCredits = sortCredits(credits.cast);
  return (
    <>
      <h2>Acting</h2>
      <ul className={styles.creditsTable}>
        {ascendCredits.map((credit, index) => {
          const year = credit.release_date?.split("-")[0];
          return (
            <li key={index} className={index % 3 === 0 ? styles.odd : ""}>
              <span className={year ? "" : styles.emptySpace}>{year ? year : "-"}</span>
              <p>{credit.title || credit.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
