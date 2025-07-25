/**
 * MovieContext
 *
 * This file defines the shape of the MovieContext and creates a React context instance.
 * It centralizes the global state management for movie-related data used across the app.
 *
 * The context provides the following shared state:
 *
 * - `search`: the current search query entered by the user.
 * - `setSearch`: function to update the search query.
 * - `movies`: list of movies resulting from a search.
 * - `setMovies`: function to update the list of movies.
 * - `currentPage`: current page number for pagination.
 * - `setCurrentPage`: function to update the current page.
 * - `selectedMovie`: currently selected movie, used for displaying details in a modal.
 * - `setSelectedMovie`: function to select or deselect a movie.
 *
 * This context is consumed using the custom hook `useMovieContext` defined separately.
 */

import { createContext } from "react";
import type { Movie } from "../types";

// Define the shape of the context value
export type MovieContextType = {
  search: string;
  setSearch: (search: string) => void;
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
  
};

// Create and export the context
export const MovieContext = createContext<MovieContextType | null>(null);
