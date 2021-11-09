import { ExploreAll } from "../../ExploreAll/ExploreAll";

export function PopularTv() {
  return <ExploreAll endpoint="tv" type="popular" mainTitle="Popular Tv Shows" day="" />;
}

export function TvOnTheAir() {
  return <ExploreAll endpoint="tv" type="on_the_air" mainTitle="Currently Airing TV Shows" day="" />;
}

export function TopRatedTv() {
  return <ExploreAll endpoint="tv" type="top_rated" mainTitle="Top Rated Tv Shows" day="" />;
}

export function TvAiringToday() {
  return <ExploreAll endpoint="tv" type="airing_today" mainTitle="TV Shows Airing Today" day="" />;
}
