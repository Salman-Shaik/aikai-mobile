import _ from "lodash";

const API_HOST = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "8f38dc176aea0ef9cbb167f50a8fc9b2";

const fetchShow = (id, type) => {
  const url = `${API_HOST}/${type}/${id}?api_key=${TMDB_API_KEY}&language=en-IN`;
  return fetch(url)
    .then((r) => r.text())
    .then((d) => JSON.parse(d));
};

export const fetchShowWith = (id, type, setter) => {
  fetchShow(id, type).then((show) => setter(show));
};

const getRandomItem = (list) => {
  const shuffledArr = _.shuffle(list);
  return shuffledArr[0];
};

export const fetchShowAnd = (setter, pageNumber, type) => {
  const url = `${API_HOST}/${type}/top_rated?api_key=${TMDB_API_KEY}&language=en-IN&page=${pageNumber}`;
  fetch(url)
    .then((res) => res.text())
    .then((data) => JSON.parse(data).results)
    .then((res) => getRandomItem(res))
    .then((i) => setter(i))
    .catch((e) => new TypeError(e));
};

export const fetchImageFromShow = (id, type, index, setShow, setRefreshing) => {
  fetchShow(id, type)
    .then((rj) => {
      const posterPath = rj["poster_path"];
      setShow({ id, type, posterPath });
      if (index === 9) {
        setRefreshing(false);
      }
    })
    .catch((e) => new TypeError(e));
};

export const searchShow = (setResults, query, type, setCurrentShowType) => {
  const url = `${API_HOST}/search/${type}?api_key=${TMDB_API_KEY}&query=${query}`;
  fetch(url)
    .then((r) => r.text())
    .then((d) => JSON.parse(d).results)
    .then((res) => res.filter((r) => !!r["poster_path"]).slice(0, 6))
    .then((sr) => {
      const temp = sr.map((r) => {
        const t = r;
        t.setCurrentShowType = () => setCurrentShowType(type);
        return t;
      });
      setResults(temp);
    })
    .catch((e) => new TypeError(e));
};

export const fetchOtherShow = (
  currentShowType,
  showId,
  keyword,
  setOtherShows
) => {
  const url = `${API_HOST}/${currentShowType}/${showId}/${keyword}?api_key=${TMDB_API_KEY}&language=en-IN&page=1`;
  fetch(url)
    .then((r) => {
      return r.text();
    })
    .then((d) => {
      return JSON.parse(d).results;
    })
    .then((res) => res.slice(0, 3))
    .then((ff) => {
      setOtherShows(ff);
    })
    .catch((e) => new TypeError(e));
};
