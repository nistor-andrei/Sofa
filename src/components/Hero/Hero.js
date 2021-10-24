import { data } from '../api/api';
import { useEffect, useState } from 'react';
import styles from '../Home/home.module.scss';
import star from '../../assets/icons/star-solid.svg';

export function Hero() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function detail() {
      const dataMovie = await data;
      setMovie(dataMovie);
    }
    detail();
  }, []);

  const year = movie.release_date?.split('-');

  function timeConvert(n) {
    let hours = n / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'min';
  }
  return (
    <div className={styles.hero}>
      <div className={styles.panel}>
        <h2>{movie.original_title}</h2>
        <div className={styles.details}>
          <span className={styles.star}>
            <img src={star} alt="review" />
            {movie.vote_average}
          </span>
          {movie.vote_count && <span>{`${movie.vote_count} Reviews`}</span>}
          <span>{year?.[0]}</span>
          <span> {timeConvert(movie.runtime)}</span>
        </div>
        <p>{movie.overview?.substring(0, 200) + '...'}</p>
      </div>
      <div className={styles.image}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} className={styles.poster} />
      </div>
    </div>
  );
}
