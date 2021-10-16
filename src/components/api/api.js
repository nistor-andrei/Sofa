const apiKey = process.env.REACT_APP_KEY;

const random = Math.floor(Math.random() * 10);

export async function getMovieDetail() {
  const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`).then((res) => res.json());
  const movie = data.results[random].id;

  async function getMovieById() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`).then((res) => res.json());
    return data;
  }
  const movieDetail = await getMovieById();
  return movieDetail;
}
