const apiKey = process.env.REACT_APP_KEY;

const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const data = fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
  .then((res) => res.json())
  .then(async (data) => {
    let details;
    do {
      const movie = data.results[random(data.results.length)].id;
      details = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
    } while (!details.id);
    return details;
  });
