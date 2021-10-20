import { useEffect, useState } from 'react';
import { getTrending } from '../../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './trendinglist.module.scss';

export function TrendingList() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    async function setTrend() {
      const data = await getTrending('movie');
      setTrending(data);
    }
    setTrend();
  }, []);

  if (!trending) {
    return <h2>Loading ...</h2>;
  }

  return (
    <Swiper spaceBetween={5} slidesPerView={7} tag="ul">
      {trending.results?.map((trend) => {
        return (
          <SwiperSlide tag="li" className={styles.item}>
            <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${trend?.poster_path}`} alt={trend.original_title} />
            {trend.original_title}
            {trend.vote_average}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
