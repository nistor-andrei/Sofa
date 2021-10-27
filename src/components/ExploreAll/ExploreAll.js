import { useEffect, useState } from 'react';
import styles from './explore.module.scss';
import { Footer } from '../Footer/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllTrending } from '../api/api';
import { Nav } from '../Nav/Nav';
import star from '../../assets/icons/star-solid.svg';

// Day will be empty anytime for non trending Movie or Tv Show
// Exemple URL API: https://${url}/3/mediaType/endpoint?apikey=....

export function ExploreAll({ type, mainTitle, endpoint, day }) {
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchData = async () => {
    const imageApi = await getAllTrending(type, page, endpoint, day);
    setPage((prev) => prev + 1);
    setMovie([...movie, ...imageApi.results]);
    if (imageApi.results.length === 0 || imageApi.results.length < 20) {
      sethasMore(false);
    }
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  console.log(movie[0]);

  return (
    <>
      <Nav />
      <main>
        <article className={styles.spacer}>
          <h1 className={styles.maintitle}>{mainTitle}</h1>
          <ul>
            <InfiniteScroll
              dataLength={movie.length} //This is important field to render the next data
              next={() => fetchData()}
              hasMore={hasMore}
              loader={<h2>Loading..</h2>}
              endMessage={<h2>You are at the end!</h2>}
              className={styles.grid}
            >
              {movie?.map((image) => {
                return (
                  <li className={styles.gridItem} key={image.id}>
                    <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${image.poster_path}`} alt={image.name} />
                    <p className={styles.title}>{image.original_title}</p>
                    <span className={styles.star}>
                      <img src={star} alt="star" />
                      {image.vote_average}
                    </span>
                  </li>
                );
              })}
            </InfiniteScroll>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
