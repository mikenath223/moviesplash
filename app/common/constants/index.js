import MOVIES_DB from 'moviesplash/config.env.js';

export default {
  SplashScreenDelayMs: 1 * 200
}

const API_KEY = MOVIES_DB.API_KEY;
const BASE_URL = MOVIES_DB.MAIN_URL;

export const trendingUrl = `${BASE_URL}trending/all/week?api_key=${API_KEY}`;
export const moreDetailsUrl = (movie_id) => `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`;
export const posterBaseUrl = 'https://image.tmdb.org/t/p/original/';
