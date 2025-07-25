/**
 * MovieProvider
 *
 * This component wraps the application (or a part of it) with the `MovieContext` provider.
 * It manages the shared state and provides values to all components within the context tree.
 *
 * State managed in this provider:
 *
 * - `search`: current search input from the user.
 * - `setSearch`: function to update the search input.
 * - `movies`: list of movies fetched from the API.
 * - `setMovies`: function to update the movies list.
 * - `selectedMovie`: movie selected by the user to show in the modal.
 * - `setSelectedMovie`: function to select/deselect a movie.
 * - `currentPage`: current pagination page.
 * - `setCurrentPage`: function to change the pagination page.
 *
 * Props:
 * - `children`: React nodes (usually your whole app or component tree) that will have access to the context.
 */

import { useState } from "react";
import type { ReactNode } from "react";
import { MovieContext } from "./MovieContext";
import type { Movie } from "../types";


export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <MovieContext.Provider
    value={{
      search,
      setSearch,
      movies,
      setMovies,
      selectedMovie,
      setSelectedMovie,
      currentPage,
      setCurrentPage,
      
    }}
  >
    {children}
  </MovieContext.Provider>
  );
};
