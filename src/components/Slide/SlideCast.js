import { useEffect, useState } from "react";
import styles from "./slide.module.scss";
import { getCredits } from "../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import placeholder from "../../assets/image/Group 3406.png";

export function SlideCast({ id, title, mediaType }) {
  const [actors, setActors] = useState(null);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    async function setData() {
      const data = await getCredits(mediaType, id);
      setActors(data);
    }
    setData();
  }, [id, mediaType]);

  if (!actors) {
    return <h2>Loading ...</h2>;
  }
  return (
    <article className={styles.articleCast}>
      <div className={styles.trend}>{actors ? <h3>{title}</h3> : ""}</div>
      <Swiper spaceBetween={10} slidesPerView={7} tag="ul" className={styles.swiperResult} navigation={true}>
        {actors.cast?.map((actors) => {
          return (
            <SwiperSlide tag="li" className={styles.card} key={actors.id}>
              <Link to={"/person/" + actors.id}>
                {
                  <img
                    src={actors.profile_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${actors?.profile_path}` : placeholder}
                    alt={actors.original_name}
                  />
                }
                <p className={styles.actorName}>{actors.name}</p>
                <p className={styles.actorChar}>{actors.character}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
}
