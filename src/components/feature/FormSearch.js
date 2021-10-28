import { useState } from 'react';
import styles from './formsearch.module.scss';

export function FormSearch({ closeSearch }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log(input);
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
