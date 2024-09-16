import { useEffect, useState } from "react";
import { fetchCast, fetchData, fetchReviews } from "../utils/fetchData";
import MovieContext from "../context/MovieContext";

export default function MovieProvider({ children }) {
  const [list, setList] = useState([]);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchData();
        setList(movies);
      } catch (error) {
        console.error("Błąd podczas pobierania danych Data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getDataCast = async () => {
      try {
        const moviesCast = await fetchCast(500);
        setCast(moviesCast);
      } catch (error) {
        console.error("Błąd podczas pobierania danych Cast:", error);
      }
    };
    getDataCast();
  }, []);
  console.log(cast);

  useEffect(() => {
    const getDataReviews = async () => {
      try {
        const moviesReviews = await fetchReviews(500);
        setReviews(moviesReviews);
      } catch (error) {
        console.error("Błąd podczas pobierania danych Reviews:", error);
      }
    };
    getDataReviews();
  }, []);
  console.log(reviews);

  return (
    <MovieContext.Provider value={{ list, cast, reviews }}>
      {children}
    </MovieContext.Provider>
  );
}
