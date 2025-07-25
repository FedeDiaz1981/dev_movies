/**
 * useMovieContext
 *
 * Custom hook to access the MovieContext values.
 * It provides a convenient way to consume the movie-related state and functions
 * such as search term, movie list, selected movie, and pagination.
 *
 * Must be used inside a <MovieProvider>. If used outside, it throws an error.
 *
 * Returns:
 * - context: all the values provided by MovieProvider (search, setSearch, movies, setMovies, selectedMovie, etc.)
 */

import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovieContext debe usarse dentro de MovieProvider");
  return context;
};
