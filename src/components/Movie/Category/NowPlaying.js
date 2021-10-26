import { ExploreAll } from "../../ExploreAll/ExploreAll";

export function NowPlayingMovie() {
  return <ExploreAll type="now_playing" mainTitle="Now Playing Movie" endpoint="movie" day="" />;
}
