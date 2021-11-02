import { Nav } from "../Nav/Nav";
import { FormSearch } from "../feature/FormSearch";
import { useState } from "react";
import { search, imageUrl } from "../api/api";
import styles from "./search.module.scss";
import placeholder from "../../assets/image/Group 3406.png";
import star from "../../assets/icons/star-solid.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

export function Search() {
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  async function handleChange(e) {
    e?.preventDefault();
    setInput(e?.target.value);

    if (input) {
      const data = await search(input, page);
      setPage((prev) => prev + 1);
      setTimeout(setMovies([...movies, ...data.results]), 2000);
      if (data.results.length === 0 || data.results.length < 20) {
        sethasMore(false);
      }
    }
  }

  useEffect(() => {
    handleChange(); // eslint-disable-next-line
  }, [input, movies]);

  return (
    <>
      <Nav />
      <main className={styles.search}>
        <FormSearch change={handleChange} input={input} />
        <section className={styles.results}>
          <h2>Search result for {input}</h2>
          <ul>
            <InfiniteScroll
              dataLength={movies.length} //This is important field to render the next data
              next={() => handleChange()}
              hasMore={hasMore}
              loader={<h2>Loading..</h2>}
              endMessage={<h2>You are at the end!</h2>}
              className={styles.grid}
            >
              {movies &&
                movies.map((movie) => {
                  return (
                    <li key={movie.id}>
                      {movie.poster_path ? (
                        <img
                          src={!movie.poster_path ? placeholder : imageUrl("w370_and_h556_bestv2") + movie.poster_path}
                          alt={movie.original_title}
                        />
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
            </InfiniteScroll>
          </ul>
        </section>
      </main>
    </>
  );
}
