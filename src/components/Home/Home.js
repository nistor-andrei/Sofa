import { Hero } from '../Hero/Hero';
import { TrendingMovie } from './TrendingList/TrendingMovie';
import styles from './home.module.scss';
import { TrendingTv } from './TrendingList/TrendingTv';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav/Nav';

export function Home() {
  return (
    <>
      <Nav />
      <Hero mediaType="movie" />
      <main>
        <article className={styles.article}>
          <div className={styles.trend}>
            <h3>Trending Movie</h3>
            <Link to="/movie/category/trend">Explore All</Link>
          </div>
          <TrendingMovie />
        </article>
        <article className={styles.article}>
          <div className={styles.trend}>
            <h3>Trending Tv Show</h3>
            <Link to="/tv/category/trend">Explore All</Link>
          </div>
          <TrendingTv />
        </article>
        <Footer />
      </main>
    </>
  );
}
