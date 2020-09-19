import axios from "axios";
import { TMDB_KEY } from "./config";
const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming"),
  movie: (id) => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
  search: (query) => getAnything("/search/movie", { query }),
  similar: (id) => getAnything(`/movie/${id}/similar`),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  popular: () => getAnything("/tv/popular"),
  topRated: () => getAnything("/tv/top_rated"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  show: (id) => getAnything(`/tv/${id}`, { append_to_response: "vidoes" }),
  search: (query) => getAnything("/search/tv", { query }),
  similar: (id) => getAnything(`/tv/${id}/similar`),
};
