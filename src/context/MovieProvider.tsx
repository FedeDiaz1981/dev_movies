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
