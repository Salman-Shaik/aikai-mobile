const API_HOST = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "8f38dc176aea0ef9cbb167f50a8fc9b2";

export const fetchShow = (id, type, index, setImages, setRefreshing) => {
  const url = `${API_HOST}/${type}/${id}?api_key=${TMDB_API_KEY}&language=en-IN`;
  fetch(url)
    .then((r) => r.text())
    .then((d) => JSON.parse(d))
    .then((rj) => {
      const posterPath = rj["poster_path"];
      setImages(posterPath);
      if (index === 4) {
        setRefreshing(false);
      }
    })
    .catch((e) => new TypeError(e));
}