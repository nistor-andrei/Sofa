import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { useEffect, useState } from 'react';
import { getTrending, imageUrl } from '../../api/api';

export function TrendingList() {
  const config = {
    perView: 7,
  };
  const mainGlide = new Glide('.main__glide', config); // default options
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    mainGlide?.mount();
    return () => mainGlide.destroy();
  }, [mainGlide]);

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
    <div className="main__glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {trending.results?.map((trend) => {
            return (
              <li className="glide__slide">
                <img src={`${imageUrl}${trend.poster_path}`} alt={trend.original_title} />
                {trend.original_title}
                {trend.vote_average}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
