import { Hero } from "../Hero/Hero";
import { Nav } from "../Nav/Nav";
import { Slide } from "../Slide/Slide";
import { Footer } from "../Footer/Footer";

export function Movie() {
  return (
    <>
      <Nav />
      <Hero mediaType="movie" />
      <Slide type="popular" title="Popular Movies" />
      <Slide type="top_rated" title="Top Rated Movies" />
      <Slide type="upcoming" title="Upcoming Movies" />
      <Slide type="now_playing" title="Now Playing Movies" />
      <Footer />
    </>
  );
}
