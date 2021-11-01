import { useEffect, useState } from "react";
import { getTrending } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styles from "./trendinglist.module.scss";
import star from "../../../assets/icons/star-solid.svg";
import { Link } from "react-router-dom";

export function TrendingMovie() {
  const [trending, setTrending] = useState(null);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    async function setTrend() {
      const data = await getTrending("movie");
      setTrending(data);
    }
    setTrend();
  }, []);

  if (!trending) {
    return <h2>Loading ...</h2>;
  }

  return (
    <Swiper spaceBetween={10} slidesPerView={7} tag="ul" className={styles.swiperResult} navigation={true}>
      {trending.results?.map((trend) => {
        return (
          <SwiperSlide tag="li" className={styles.card} key={trend.id}>
            <Link to={"/movie/" + trend.id}>
              <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${trend?.poster_path}`} alt={trend.original_title} />
              <h3 className={styles.title}>{trend.original_title}</h3>
              <span className={styles.cardStar}>
                <img src={star} alt="star" />
                {trend.vote_average}
              </span>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
