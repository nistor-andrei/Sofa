import { Hero } from "../Hero/Hero";
import { Nav } from "../Nav/Nav";
import { Slide } from "../Slide/Slide";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function Tv() {
  return (
    <>
      <Nav />
      <Hero mediaType="tv" />
      <Slide type="popular" source="tv" title="Popular TV Shows">
        <Link to="/tv/category/popular">Explore All</Link>
      </Slide>
      <Slide type="top_rated" source="tv" title="Top Rated TV Shows">
        <Link to="/tv/category/top_rated">Explore All</Link>
      </Slide>
      <Slide type="on_the_air" source="tv" title="Currently Airing TV Shows">
        <Link to="/tv/category/on_the_air">Explore All</Link>
      </Slide>
      <Slide type="airing_today" source="tv" title="TV Shows Airing Today">
        <Link to="/tv/category/airing_today">Explore All</Link>
      </Slide>
      <Footer />
    </>
  );
}
