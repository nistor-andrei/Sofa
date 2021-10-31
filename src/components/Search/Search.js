import { Nav } from '../Nav/Nav';
import { FormSearch } from '../feature/FormSearch';
import { useState } from 'react';
import { search, imageUrl } from '../api/api';
import styles from './search.module.scss';

export function Search() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState(null);

  async function handleChange(e) {
    setInput(e.target.value);

    if (input) {
      const data = await search(input);
      setTimeout(setMovies(data), 2000);
    }
  }

  console.log(movies);

  return (
    <>
      <Nav />
      <main className={styles.search}>
        <FormSearch change={handleChange} value={input} />
        <section className={styles.results}>
          <h2>Search result for {input}</h2>
          <ul>
            {movies &&
              movies.results.map((movie) => {
                console.log(movie?.profile_path);
                return (
                  <li key={movie.id}>
                    {movie.poster_path ? (
                      <img src={imageUrl('w370_and_h556_bestv2') + movie.poster_path} alt={movie.original_title} />
                    ) : (
                      <img src={imageUrl('w370_and_h556_bestv2') + movie.profile_path} alt={movie.original_title} />
                    )}
                    <h3>{movie.original_title || movie.original_name || movie.name}</h3>
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </>
  );
}
