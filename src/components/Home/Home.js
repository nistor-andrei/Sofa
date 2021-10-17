import { Nav } from './Nav/Nav';
import { data } from '../api/api';
import { useEffect, useState } from 'react';
import styles from './home.module.scss';

export function Home() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function detail() {
      const dataMovie = await data;
      setMovie(dataMovie);
    }
    detail();
  }, []);

  const year = movie.release_date?.split('-');
  console.log(year);

  function timeConvert(n) {
    let hours = n / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'min';
  }

  return (
    <>
      <Nav />
      <main>
        <div className={styles.hero}>
          <div className={styles.panel}>
            <h2>{movie.original_title}</h2>
            <span>{movie.vote_average}</span>
            <span>{`${movie.vote_count}Reviews`}</span>
            <span>{year}</span>
            <span> {timeConvert(movie.runtime)}</span>
            <p>{movie.overview}</p>
          </div>
          <div className={styles.image}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} />
          </div>
        </div>
      </main>
    </>
  );
}
