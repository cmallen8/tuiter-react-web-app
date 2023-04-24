import axios from "axios";
const TMDB_API = "https://api.themoviedb.org/3/";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

// original search url: https://api.themoviedb.org/3/search/tv?api_key=XXXXXXX&query=office
export const textSearch = async (query) => {
    const response = await axios.get(
        `${TMDB_API}search/tv?api_key=${TMDB_KEY}&query=${query}`);

        return response.data;
};

// https://api.themoviedb.org/3/tv/2316/watch/providers?api_key=dd701e383d2a6b36e447235e913eb3fe
export const getStreamingProviderPaid = async (id) => {
    const response = await axios.get(
        `${TMDB_API}tv/${id}/watch/providers?api_key=${TMDB_KEY}`);
    return response.data.results.US.buy;
};

export const getStreamingProviderFree = async (id) => {
    const response = await axios.get(
        `${TMDB_API}tv/${id}/watch/providers?api_key=${TMDB_KEY}`);
    return response.data.results.US.flatrate;
};

// original url: https://api.themoviedb.org/3/tv/2316?api_key=dd701e383d2a6b36e447235e913eb3fe&language=en-US
export const getShowDetails = async (id) => {
    const response = await axios.get(
        `${TMDB_API}tv/${id}?api_key=${TMDB_KEY}&language=en-US`);
    return response.data;
};

// https://api.themoviedb.org/3/tv/popular?api_key=dd701e383d2a6b36e447235e913eb3fe&page=1
export const getPopular = async () => {
    const response = await axios.get(
        `${TMDB_API}tv/popular?api_key=${TMDB_KEY}&language=en-US&page=1`);
    return response.data.results;
};

