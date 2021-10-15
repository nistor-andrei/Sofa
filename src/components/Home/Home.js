import { Nav } from "./Nav/Nav";
import { getMovieDetail } from "../api/api";

export function Home() {
  const movie = getMovieDetail();
  console.log(movie);

  return (
    <>
      <Nav />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
