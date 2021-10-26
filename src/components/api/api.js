const apiKey = process.env.REACT_APP_KEY;

const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function getMovie({ mediaType }) {
  const data = fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`)
    .then((res) => res.json())
    .then(async (data) => {
      let details;
      do {
        const movie = data.results[random(data.results.length)].id;
        details = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
      } while (!details.id);
      return details;
    });

  return data;
}
export function getTrending(type) {
  return fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&page=1`).then((res) => res.json());
}

export const imageUrl = "https://image.tmdb.org/t/p/original/";

export async function getAllTrending(type, page) {
  let res = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&page=${page}`);
  let data = await res.json();
  return data;
}

export function getPopular(type) {
  return fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`).then((res) => res.json());
}
