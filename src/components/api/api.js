const apiKey = process.env.REACT_APP_KEY;

const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function getMovieRandom(mediaType) {
  const data = fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`
  )
    .then(res => res.json())
    .then(async data => {
      let details;
      do {
        const movie = data.results[random(data.results.length)].id;
        details = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movie}?api_key=${apiKey}&language=en-US`
        ).then(res => res.json());
      } while (!details.id);
      return details;
    });

  return data;
}
export function getTrending(type) {
  return fetch(
    `https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&page=1`
  ).then(res => res.json());
}

export const imageUrl = function (dimension) {
  return `https://image.tmdb.org/t/p/${dimension}/`;
};

export async function getAllTrending(
  type,
  page,
  endpoint = 'movie',
  day = 'week'
) {
  let res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}/${type}/${day}?api_key=${apiKey}&page=${page}`
  );
  let data = await res.json();
  return data;
}

export function getPopular(type, source = 'movie') {
  return fetch(
    `https://api.themoviedb.org/3/${source}/${type}?api_key=${apiKey}&language=en-US&page=1`
  ).then(res => res.json());
}

export async function search(query, page) {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
    ).then(res => res.json());
    return data;
  } catch (e) {
    return console.log(e);
  }
}

export async function getMovie(mediaType, id) {
  const data = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`
  ).then(res => res.json());
  return data;
}
