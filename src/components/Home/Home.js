import { Nav } from './Nav/Nav';
import { data } from '../api/api';
import { useEffect, useState } from 'react';

export function Home() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function detail() {
      const dataMovie = await data;
      setMovie(dataMovie);
    }
    detail();
  }, []);
  console.log(movie.original_title);
  return (
    <>
      <Nav />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
