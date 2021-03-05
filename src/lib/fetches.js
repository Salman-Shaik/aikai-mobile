import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";

const API_HOST = "https://api.themoviedb.org/3";
const USER_API = `https://www.aikai.co/mobile`;
const TMDB_API_KEY = "8f38dc176aea0ef9cbb167f50a8fc9b2";

const fetchShow = (id, type) => {
  const url = `${API_HOST}/${type}/${id}?api_key=${TMDB_API_KEY}&language=en-IN`;
  return fetch(url)
    .then((r) => r.text())
    .then((d) => JSON.parse(d));
};

export const fetchShowWith = (id, type, setter, setLoaded) => {
  fetchShow(id, type).then((show) => {
    setter(show);
    setLoaded(true);
  });
};

const getRandomItem = (list) => {
  const shuffledArr = _.shuffle(list);
  return shuffledArr[0];
};

export const fetchShowAnd = (setter, pageNumber, type, setLoaded) => {
  const url = `${API_HOST}/${type}/top_rated?api_key=${TMDB_API_KEY}&language=en-IN&page=${pageNumber}`;
  fetch(url)
    .then((res) => res.text())
    .then((data) => JSON.parse(data).results)
    .then((res) => getRandomItem(res))
    .then((i) => {
      setter(i);
      setLoaded(true);
    })
    .catch((e) => new TypeError(e));
};

export const fetchImageFromShow = (id, type, index, setShow, setLoaded) => {
  fetchShow(id, type)
    .then((rj) => {
      const posterPath = rj["poster_path"];
      setShow({ id, type, posterPath });
      if (index === 9) {
        setLoaded(true);
      }
    })
    .catch((e) => new TypeError(e));
};

export const searchShow = (
  setResults,
  query,
  type,
  setCurrentShowType,
  setLoaded
) => {
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
      !!setLoaded && setLoaded(true);
    })
    .catch((e) => new TypeError(e));
};

export const fetchOtherShow = (
  currentShowType,
  showId,
  keyword,
  setOtherShows,
  setLoaded
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
      !!setLoaded && setLoaded(true);
    })
    .catch((e) => new TypeError(e));
};

export const login = (
  username,
  password,
  setError,
  setSuccess,
  setIsUserLoggedIn,
  updateLocation,
  storeData
) => {
  const body = { username, password };
  const loginHandler = (token) => {
    if (!token) {
      setSuccess(false);
      setError(true);
    } else {
      setError(false);
      setSuccess(true);
      storeData("user-key", token).then(() => {
        setIsUserLoggedIn(true);
        updateLocation("Suggestions");
      });
    }
  };
  fetch(`${USER_API}/login`, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.text())
    .then((d) => JSON.parse(d).user)
    .then(loginHandler)
    .catch((e) => new TypeError(e));
};

export const fetchFavorites = (setFavorites, setLoaded) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/favorites?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((f) => {
        setFavorites(f);
        setLoaded(true);
      });
  });
};

export const fetchWatchList = (setWatchList, setLoaded) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watchlist?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((w) => w.filter((s) => !s.watched))
      .then((w) => {
        setWatchList(w);
        setLoaded(true);
      });
  });
};

export const fetchWatchHistory = (updateWatchedList, setLoaded) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watchlist?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((w) => w.filter((s) => !!s.watched))
      .then((w) => {
        updateWatchedList(w);
        setLoaded(true);
      });
  });
};

export const removeFavorite = (id, callback) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/favorite?user=${value}`, {
      method: "delete",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          callback();
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const removeFromWatchList = (id, callback) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watch?user=${value}`, {
      method: "delete",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          callback();
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const setWatched = (id, callback) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watched?user=${value}`, {
      method: "put",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          callback();
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const addToWatchlist = (id, title, posterPath, setIsSaved) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watch?user=${value}`, {
      method: "put",
      body: JSON.stringify({ id, title, posterPath }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsSaved(true);
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const addToFavorites = (id, title, posterPath, setIsFavorite) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/favorite?user=${value}`, {
      method: "put",
      body: JSON.stringify({ id, title, posterPath }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsFavorite(true);
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const checkIsFavorite = (id, setIsFavorite) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/favorites?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((d) => d.find((e) => e.id === id))
      .then((result) => setIsFavorite(!!result))
      .catch((e) => new TypeError(e));
  });
};

export const checkIsSaved = (id, setIsSaved) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/watchlist?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((d) => d.find((e) => e.id === id))
      .then((result) => setIsSaved(!!result))
      .catch((e) => new TypeError(e));
  });
};

export const fetchUserFullName = (setFullName) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/name?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((result) => setFullName(result.name))
      .catch((e) => new TypeError(e));
  });
};

const playingMoviesFilter = (json, setPlayingMovies) => {
  let results = _.shuffle(json.results);
  results = results
    .filter((value, index) => results.indexOf(value) === index)
    .slice(0, 2);
  setPlayingMovies(results);
};

const airingShowsFilter = (json, setAiringTvShows) => {
  let results = _.shuffle(json.results);
  results = results
    .filter((value, index) => results.indexOf(value) === index)
    .slice(0, 2);
  setAiringTvShows(results);
};

export const fetchPlayingMovies = (setPlayingMovies) => {
  const url = `${API_HOST}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-IN&region=IN`;
  fetch(url)
    .then((r) => r.text())
    .then((data) => JSON.parse(data))
    .then((json) => playingMoviesFilter(json, setPlayingMovies))
    .catch((e) => new TypeError(e));
};

export const fetchAiringTVShows = (setAiringTvShows, setLoaded) => {
  const tvUrl = `${API_HOST}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=en-IN`;
  fetch(tvUrl)
    .then((r) => r.text())
    .then((data) => JSON.parse(data))
    .then((json) => {
      airingShowsFilter(json, setAiringTvShows);
      setLoaded(true);
    })
    .catch((e) => new TypeError(e));
};

export const registerUser = (body, setError, setSuccess, updateLocation) => {
  fetch(`${USER_API}/register`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          updateLocation("Login");
        }, 300);
      } else {
        setSuccess(false);
        setError(true);
      }
    })
    .catch((e) => new TypeError(e));
};

export const updateUser = (body, setError, setSuccess, updateLocation) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/details?user=${value}`, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setError(false);
          updateLocation("Menu");
          setTimeout(() => {
            updateLocation("Account");
          }, 1);
        } else {
          setSuccess(false);
          setError(true);
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const fetchDetails = (
  updateName,
  updateAge,
  setExplicitFlag,
  setLanguages,
  setLoaded
) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/user_details?user=${value}`)
      .then((res) => res.text())
      .then((d) => JSON.parse(d))
      .then((details) => {
        const { languages, age, name, explicitFlag } = details;
        updateAge(age.toString());
        setExplicitFlag(explicitFlag);
        setLanguages(languages);
        updateName(name);
        setLoaded(true);
      })
      .catch((e) => new TypeError(e));
  });
};

export const updatePassword = (
  oldPassword,
  newPassword,
  updateLocation,
  setError,
  setSuccess
) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/update_password?user=${value}`, {
      method: "put",
      body: JSON.stringify({ oldPassword, newPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setError(false);
          updateLocation("Menu");
        } else {
          setSuccess(false);
          setError(true);
        }
      })
      .catch((e) => new TypeError(e));
  });
};

export const fetchSubscription = (setSubscription) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/subscription?user=${value}`)
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .then((result) => setSubscription(result.subscription))
      .catch((e) => new TypeError(e));
  });
};

export const updateSubscription = (subscription, updateLocation) => {
  AsyncStorage.getItem("user-key").then((value) => {
    fetch(`${USER_API}/subscription?user=${value}`, {
      method: "put",
      body: JSON.stringify({ subscription }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        updateLocation("Menu");
      })
      .catch((e) => new TypeError(e));
  });
};
