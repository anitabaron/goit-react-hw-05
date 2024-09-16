import axios from "axios";
import { API_KEY } from "../constants/constants";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const params = {
  page: 1,
  language: "en-US",
  // query,
  api_key: API_KEY,
};

//query = ""
export const fetchData = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, { params });
    console.log("Data, all movies: ", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchData: ", error);
    return [];
  }
};

export const fetchCast = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/credits`, { params });
    console.log("Cast: ", movie_id, response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchCast: ", error);
    return [];
  }
};

export const fetchReviews = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, { params });
    console.log("Reviews for ID: ", movie_id, response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchReviews: ", error);
    return [];
  }
};

// query: "your_search_query", // zapytanie
