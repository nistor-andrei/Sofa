import { useEffect, useState } from "react";
import { search } from "../api/api";
import styles from "./formsearch.module.scss";

export function FormSearch({ closeSearch }) {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState(null);

  async function handleChange(e) {
    setInput(e.target.value);
    if (input) {
      const data = await search(input);
      setTimeout(setMovies(data), 1000);
    }
  }

  console.log(movies, input);
  return (
    <div className={styles.form}>
      <form>
        <div>
          <input id="search" name="search" type="text" placeholder="Search for a movie, tv show or person..." value={input} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
