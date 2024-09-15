import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/discover/movie";
const params = {
  page: 1,
  language: "en-US",
  api_key: "682127ed972e56f6bb70ae743d23c1d7",
};

export const fetchData = async () => {
  try {
    const response = await axios.get(baseURL, { params });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
  }
};

// query: "your_search_query", // zapytanie które wysłać
