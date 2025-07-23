import { useState } from "react";
import { useMovieContext } from "../context/useMovieContext";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const { movies } = useMovieContext();

  const [currentPage, setCurrentPage] = useState(1);

  // Determinar cuántas películas mostrar por página según ancho
  const isMobile = window.innerWidth < 768;
  const moviesPerPage = isMobile ? 4 : 6;

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const paginatedMovies = movies.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={endIndex >= movies.length}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
