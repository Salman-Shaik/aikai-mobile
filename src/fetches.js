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
      if (index === 3) {
        setRefreshing(false);
      }
    })
    .catch((e) => new TypeError(e));
};

export const searchShow = (setResults, query, type, setRefreshing) => {
  const url = `${API_HOST}/search/${type}?api_key=${TMDB_API_KEY}&query=${query}`;
  fetch(url)
    .then((r) => r.text())
    .then((d) => JSON.parse(d).results)
    .then((res) => res.filter((r) => !!r["poster_path"]).slice(0, 6))
    .then((sr) => {
      setResults(sr);
      if (!!setRefreshing) {
        setRefreshing(false);
      }
    })
    .catch((e) => new TypeError(e));
};
