import { useEffect, useState } from "react";
import styles from "./explore.module.scss";
import { Footer } from "../Footer/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import { getHomeTrending } from "../api/api";
import { Nav } from "../Nav/Nav";
import star from "../../assets/icons/star-solid.svg";
import { Link } from "react-router-dom";

// Day will be empty anytime for non trending Movie or Tv Show
// Exemple URL API: https://${url}/3/mediaType/endpoint?apikey=....

export function ExploreAllHome({ type, mainTitle, endpoint, day }) {
  console.log(type);
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchData = async () => {
    const imageApi = await getHomeTrending(type, page, day);
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
                  <Link to={type === "movie" ? `/${type}/${image.id}` : `/${type}/${image.id}`}>
                    <li className={styles.gridItem} key={image.id}>
                      <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${image.poster_path}`} alt={image.name} />
                      <p className={styles.title}>{image.original_title}</p>
                      <span className={styles.star}>
                        <img src={star} alt="star" />
                        {image.vote_average}
                      </span>
                    </li>
                  </Link>
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
