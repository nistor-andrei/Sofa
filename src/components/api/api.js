const apiKey = process.env.REACT_APP_KEY;
const youtubeKey = process.env.REACT_APP_KEY_YOUTUBE;
const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function getMovieRandom(mediaType) {
  const data = fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`)
    .then((res) => res.json())
    .then(async (data) => {
      let details;
      do {
        const movie = data.results[random(data.results.length)].id;
        details = await fetch(`https://api.themoviedb.org/3/${mediaType}/${movie}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
      } while (!details.id);
      return details;
    });

  return data;
}
export function getTrending(type) {
  return fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&page=1`).then((res) => res.json());
}

export const imageUrl = function (dimension = "w370_and_h556_bestv2") {
  return `https://image.tmdb.org/t/p/${dimension}`;
};

export async function getAllTrending(type, page, endpoint = "movie", day = "week") {
  let res = await fetch(`https://api.themoviedb.org/3/${endpoint}/${type}/${day}?api_key=${apiKey}&page=${page}`);
  let data = await res.json();
  return data;
}

export function getPopular(type, source = "movie") {
  return fetch(`https://api.themoviedb.org/3/${source}/${type}?api_key=${apiKey}&language=en-US&page=1`).then((res) => res.json());
}

export async function search(query, page) {
  try {
    const data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`).then((res) =>
      res.json()
    );
    return data;
  } catch (e) {
    return console.log(e);
  }
}

export async function getMovie(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
  return data;
}

export async function getMoviesImages(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${apiKey}`).then((res) => res.json());
  return data;
}

export async function getExternalLinks(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/external_ids?api_key=${apiKey}`).then((res) => res.json());
  return data;
}

export async function getCredits(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${apiKey}`).then((res) => res.json());
  return data;
}

export async function getRecommandations(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`).then((res) =>
    res.json()
  );
  return data;
}

export const youtubeThumbnail = (key) => {
  return `https://img.youtube.com/vi/${key}/mqdefault.jpg`;
};
export const youtubeFullScreen = (key) => {
  return `https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`;
};

export const youtubeWatch = (key) => {
  return `https://youtube.com/watch?v=${key}`;
};

export async function getDurationVideo(id) {
  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${id}&key=${youtubeKey}`).then((res) => res.json());
  return data.items[0].contentDetails.duration;
}

export async function getVideo(mediaType, id) {
  const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${apiKey}&language=en-US`).then((res) => res.json());
  return data;
}

export async function getPerson(id) {
  const data = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
  return data;
}

export async function getSocialPerson(id) {
  const data = await fetch(`https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${apiKey}&language=en-US`).then((res) => res.json());
  return data;
}

export async function getCreditsCombined(id) {
  const data = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`).then((res) => res.json());
  return data;
}

export async function getPersonImage(id) {
  const data = await fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`).then((res) => res.json());
  return data;
}
