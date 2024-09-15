import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
import MovieList from "./components/MovieList";
import MovieCast from "./components/MovieCast";
import MovieReviews from "./components/MovieReviews";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const movies = await fetchData();
      setList(movies);
    };
    getData();
  }, []);
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink className={setActive} to="/">
            Home{" "}
          </NavLink>
          <NavLink className={setActive} to="/movies">
            Movies{" "}
          </NavLink>
          <NavLink className={setActive} to="/movies/:movieId">
            Details{" "}
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} list={list} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <MovieList list={list} />
      </BrowserRouter>
    </>
  );
}

export default App;
