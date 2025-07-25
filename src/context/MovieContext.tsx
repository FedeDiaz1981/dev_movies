import { createContext } from "react";
import type { Movie } from "../types";

export type MovieContextType = {
  search: string
  setSearch: (search: string) => void
  movies: Movie[]
  setMovies: (movies: Movie[]) => void
  selectedMovie: Movie | null
  setSelectedMovie: (movie: Movie | null) => void
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const MovieContext = createContext<MovieContextType | null>(null);
