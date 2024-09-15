import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import MovieContext from "../context/MovieContext";

export default function MovieProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchData();
        setList(movies);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };
    getData();
  }, []);
  return <MovieContext.Provider value={list}>{children}</MovieContext.Provider>;
}
