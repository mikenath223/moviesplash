import MOVIES_DB from 'moviesplash/config.env.js';

export default {
  SplashScreenDelayMs: 1 * 200
}

const API_KEY = MOVIES_DB.API_KEY;
const BASE_URL = MOVIES_DB.MAIN_URL;

export const trendingUrl = `${BASE_URL}trending/all/week?api_key=${API_KEY}`;
export const posterBaseUrl = 'https://image.tmdb.org/t/p/original/';

export const nextPageUrl = (url, pageNumber) => {
  let regexDecre = new RegExp(`&page=${pageNumber - 1}`);
  let regexIncre = new RegExp(`&page=${pageNumber + 1}`);
  if (regexDecre.test(url)) {
    return url.split(`&page=${pageNumber - 1}`).join(`&page=${pageNumber - 1}`);
  } else if (regexIncre.test(url)) {
    return url.split(`&page=${pageNumber + 1}`).join(`&page=${pageNumber + 1}`);
  } else {
    return `${url}&page=${pageNumber}`;
  }
}

export const moreDetailsUrl = (mediaId, mediaType) => {
  let url;
  switch (mediaType) {
    case "movie":
      url = `${BASE_URL}movie/${mediaId}?api_key=${API_KEY}`;
      break;
    case "tv":
      url = `${BASE_URL}tv/${mediaId}?api_key=${API_KEY}&language=en-US`;
      break;
    default:
      url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=
      release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${mediaId}`;
  }
  console.log(url);
  return url;
}

export const tvGenreUrl = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const movieGenreUrl = `${BASE_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`;