import axios from "axios";

// const baseURL = "https://api.themoviedb.org/3/trending/movie/day";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const params = {
  page: 1,
  language: "en-US",
  // query,
  api_key: "682127ed972e56f6bb70ae743d23c1d7",
};

//query = ""
export const fetchData = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, { params });
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchData: ", error);
    return [];
  }
};

export const fetchCast = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/credits`, { params });
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchCast: ", error);
    return [];
  }
};

export const fetchReviews = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, { params });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Błąd podczas pobierania danych fetchReviews: ", error);
    return [];
  }
};

// query: "your_search_query", // zapytanie
