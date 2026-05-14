import axios from "axios";

const API_KEY = "tu_api_key";
const BASE_URL = "https://www.omdbapi.com";

export const searchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      apikey: API_KEY,
    },
  });
  return response.data;
};