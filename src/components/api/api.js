const apiKey = process.env.REACT_APP_KEY;

const random = Math.floor(Math.random() * 10);

export const data = fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((data) => {
    const movie = data.results[random].id;
    return fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`);
  })
  .then((res) => res.json());
