import { ExploreAll } from '../../ExploreAll/ExploreAll';

export function NowPlayingMovie() {
  return <ExploreAll type="now_playing" mainTitle="Now Playing Movie" endpoint="movie" day="" />;
}

export function PopularMovie() {
  return <ExploreAll type="popular" mainTitle="Popular Movies" endpoint="movie" day="" />;
}

export function TopRatedMovie() {
  return <ExploreAll type="top_rated" mainTitle="Top Rated Movies" endpoint="movie" day="" />;
}

export function TrendingMovie() {
  return <ExploreAll type="movie" mainTitle="Trending Movie" endpoint="trending" />;
}

export function UpcomingMovie() {
  return <ExploreAll type="upcoming" mainTitle="Upcoming Movies" endpoint="movie" day="" />;
}
