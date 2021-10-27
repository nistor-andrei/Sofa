import { getMovie } from '../api/api';
import { useEffect, useState } from 'react';
import styles from '../Home/home.module.scss';
import star from '../../assets/icons/star-solid.svg';

export function Hero({ mediaType }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function detail() {
      const dataMovie = await getMovie(mediaType);

      setMovie(dataMovie);
    }
    detail();
  }, [mediaType]);

  if (!movie) {
    return <h2>Loading</h2>;
  }
  let year;

  if (movie.release_date) {
    year = movie.release_date?.split('-');
  } else {
    year = movie.first_air_date?.split('-');
  }

  function timeConvert(n) {
    let hours = n / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'min';
  }
  return (
    <div className={`${styles.hero} hero`}>
      <div className={styles.panel}>
        <h2>{movie.original_title || movie.name}</h2>
        <div className={styles.details}>
          <span className={styles.star}>
            <img src={star} alt="review" />
            {movie.vote_average}
          </span>
          {movie.vote_count && <span>{`${movie.vote_count} Reviews`}</span>}
          <span>{year?.[0]}</span>
          <span> {movie.runtime ? timeConvert(movie.runtime) : `Seasons ${movie.seasons?.length} `}</span>
        </div>
        <p>{movie.overview?.substring(0, 200) + '...'}</p>
      </div>
      <div className={styles.image}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} className={styles.poster} />
      </div>
    </div>
  );
}
