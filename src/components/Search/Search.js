import { Nav } from "../Nav/Nav";
import { FormSearch } from "../feature/FormSearch";
import { useState } from "react";
import { search, imageUrl } from "../api/api";
import styles from "./search.module.scss";
import placeholder from "../../assets/image/Group 3406.png";
import star from "../../assets/icons/star-solid.svg";

export function Search() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState(null);

  async function handleChange(e) {
    setInput(e.target.value);

    if (input) {
      const data = await search(input);
      setTimeout(setMovies(data), 2000);
    }
  }

  return (
    <>
      <Nav />
      <main className={styles.search}>
        <FormSearch change={handleChange} value={input} />
        <section className={styles.results}>
          <h2>Search result for {input}</h2>
          <ul className={styles.grid}>
            {movies &&
              movies.results.map((movie) => {
                return (
                  <li key={movie.id}>
                    {movie.poster_path ? (
                      <img src={!movie.poster_path ? placeholder : imageUrl("w370_and_h556_bestv2") + movie.poster_path} alt={movie.original_title} />
                    ) : (
                      <img
                        src={!movie.profile_path ? placeholder : imageUrl("w370_and_h556_bestv2") + movie.profile_path}
                        alt={movie.original_title}
                      />
                    )}
                    <h3>{movie.original_title || movie.original_name || movie.name}</h3>
                    {(movie.vote_average || movie.vote_average > 0) && (
                      <span>
                        <img src={star} alt="star" className={styles.star} />
                        {movie.vote_average}
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </>
  );
}
