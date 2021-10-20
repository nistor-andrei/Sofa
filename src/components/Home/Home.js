import { Nav } from './Nav/Nav';
import { Hero } from './Hero/Hero';

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <article>
          <div>
            <h3>Trending Movie</h3>
            <a href="/">Explore All</a>
          </div>
        </article>
      </main>
    </>
  );
}
