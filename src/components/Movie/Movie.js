import { Hero } from "../Hero/Hero";
import { Nav } from "../Nav/Nav";
import { Slide } from "../Slide/Slide";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

export function Movie() {
  return (
    <>
      <Nav />
      <Hero mediaType="movie" />
      <Slide type="popular" title="Popular Movies">
        <Link to="/movie/category/popular">Explore All</Link>
      </Slide>
      <Slide type="top_rated" title="Top Rated Movies">
        <Link to="/movie/category/top_rated">Explore All</Link>
      </Slide>
      <Slide type="upcoming" title="Upcoming Movies">
        <Link to="/movie/category/upcoming">Explore All</Link>
      </Slide>
      <Slide type="now_playing" title="Now Playing Movies">
        <Link to="/movie/category/now_playing">Explore All</Link>
      </Slide>
      <Footer />
    </>
  );
}
