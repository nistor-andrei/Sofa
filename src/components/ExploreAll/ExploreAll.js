import { useEffect, useState } from "react";
import styles from "./explore.module.scss";
import { Footer } from "../Footer/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllTrending } from "../api/api";
import { Nav } from "../Nav/Nav";

export function ExploreAll({ mediaType, mainTitle }) {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchData = async () => {
    const imageApi = await getAllTrending(mediaType, page);
    setPage((prev) => prev + 1);
    setImages([...images, ...imageApi.results]);
    if (imageApi.results.length === 0 || imageApi.results.length < 20) {
      sethasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!images) {
    return <h2>Loading...</h2>;
  }
  console.log(images[0]);

  return (
    <>
      <Nav />
      <main>
        <article className={styles.spacer}>
          <h1 className={styles.maintitle}>{mainTitle}</h1>
          <ul>
            <InfiniteScroll
              dataLength={images.length} //This is important field to render the next data
              next={() => fetchData()}
              hasMore={hasMore}
              loader={<h2>Loading..</h2>}
              endMessage={<h2>You are at the end!</h2>}
              className={styles.grid}
            >
              {images?.map((image) => {
                return (
                  <li className={styles.gridItem} key={image.id}>
                    <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${image.poster_path}`} alt={image.name} />
                    <p className={styles.title}>{image.original_title}</p>
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
