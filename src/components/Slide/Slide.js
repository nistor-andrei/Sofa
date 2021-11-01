import { useEffect, useState } from "react";
import styles from "./slide.module.scss";
import { getPopular } from "../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import star from "../../assets/icons/star-solid.svg";
import { Link } from "react-router-dom";

export function Slide({ type, source, title, children }) {
  const [trending, setTrending] = useState(null);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    async function setTrend() {
      const data = await getPopular(type, source);
      setTrending(data);
    }
    setTrend();
  }, [type, source]);

  if (!trending) {
    return <h2>Loading ...</h2>;
  }
  return (
    <main>
      <article className={styles.article}>
        <div className={styles.trend}>
          <h3>{title}</h3>
          {children}
        </div>
        <Swiper spaceBetween={10} slidesPerView={7} tag="ul" className={styles.swiperResult} navigation={true}>
          {trending.results?.map((trend) => {
            return (
              <SwiperSlide tag="li" className={styles.card} key={trend.id}>
                <Link to={source + "/" + trend.id}>
                  <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${trend?.poster_path}`} alt={trend.original_title} />
                  <h3 className={styles.title}>{trend.original_title || trend.name}</h3>
                  <span className={styles.cardStar}>
                    <img src={star} alt="star" />
                    {trend.vote_average}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
    </main>
  );
}
