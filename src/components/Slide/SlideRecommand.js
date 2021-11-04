import { useEffect, useState } from "react";
import styles from "./slide.module.scss";
import { getRecommandations } from "../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import star from "../../assets/icons/star-solid.svg";

export function SlideRecommand({ mediaType, id, title }) {
  const [recommand, setRecommand] = useState(null);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    async function setData() {
      const data = await getRecommandations(mediaType, id);
      setRecommand(data);
    }
    setData();
  }, [id, mediaType]);

  if (!recommand) {
    return <h2>Loading ...</h2>;
  }
  return (
    <article className={styles.articleCast}>
      <div className={styles.trend}>
        <h3>{title}</h3>
      </div>
      <Swiper spaceBetween={10} slidesPerView={7} tag="ul" className={styles.swiperResult} navigation={true}>
        {recommand.results?.map((recommand) => {
          return (
            <SwiperSlide tag="li" className={styles.card} key={recommand.id}>
              <Link to={"" + recommand.id}>
                <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${recommand?.poster_path}`} alt={recommand.original_title} />
                <p className={styles.actorName}>{recommand.original_title}</p>
                <span>
                  <img src={star} alt="star" className={styles.star} />
                  {recommand.vote_average.toFixed(1)}
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
}
