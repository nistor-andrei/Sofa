import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { getMovie } from '../../api/api';
import styles from '../tabs.module.scss';
import { imageUrl } from '../../api/api';

export function Overview() {
  const { id } = useParams();
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getMovie('movie', id);
      setOverview(data);
    }
    getData();
  }, [id]);
  if (!overview) {
    return <h2>Loading..</h2>;
  }
  const date = overview.release_date.split('-').reverse().join('.');
  function timeConvert(n) {
    let hours = n / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'min';
  }
  const budget = overview.budget.toLocaleString();

  console.log(overview);
  const gen = overview.genres;
  return (
    <article className={styles.info + ' spacing'}>
      <div className={styles.infoLeft}>
        <img src={imageUrl('w370_and_h556_bestv2') + overview.poster_path} alt={overview.original_title} />
      </div>
      <div className={styles.infoRight}>
        <h2>Storyline</h2>
        <p>{overview.overview}</p>
        <ul>
          <li>
            <p className={styles.titleDetails}> Released</p>
            <p>{date}</p>
          </li>
          <li>
            <p className={styles.titleDetails}> Runtime</p>
            <p>{timeConvert(overview.runtime)}</p>
          </li>
          {budget > 0 && (
            <li>
              <p className={styles.titleDetails}> Budget</p>
              <p>${budget}</p>
            </li>
          )}
          <li>
            <p className={styles.titleDetails}> Genre</p>
            {gen?.map((el) => {
              return (
                <a href="/" key={el.id}>
                  {el.name + ','}
                </a>
              );
            })}
          </li>
          <li>
            <p className={styles.titleDetails}> Status</p>
            {overview.status}
          </li>
          <li>
            <p className={styles.titleDetails}> Production</p>
            {overview.production_companies.map((company) => {
              return <p key={company.id}>{company.name + ','}</p>;
            })}
          </li>
        </ul>
      </div>
    </article>
  );
}
