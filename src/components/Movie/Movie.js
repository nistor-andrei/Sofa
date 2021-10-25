import { Hero } from "../Hero/Hero";
import { Nav } from "../Home/Nav/Nav";
import { Slide } from "../Slide/Slide";

export function Movie() {
  return (
    <>
      <Nav />
      <Hero mediaType="movie" />
      <Slide type="popular" />
    </>
  );
}
