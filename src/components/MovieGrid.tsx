/**
 * MovieGrid Component
 *
 * This component is responsible for displaying a paginated grid of movies.
 * It uses either the `movies` prop passed externally or falls back to movies
 * from the global context provided by `useMovieContext`.
 *
 * Features:
 * - Responsive pagination: adapts number of movies per page based on screen width.
 * - Displays a fallback message when no movies are available.
 * - Renders movie cards using the `MovieCard` component.
 *
 * Props:
 * - movies?: Movie[] (optional) — An optional array of movies to display. If not provided, it defaults to context movies.
 */

import { useState } from "react";
import { useMovieContext } from "../context/useMovieContext";
import MovieCard from "./MovieCard";
import type { Movie } from "../types";

type MovieGridProps = {
  movies?: Movie[];
};

export default function MovieGrid({ movies: propMovies }: MovieGridProps) {
  // Get movies from context if not provided as props
  const context = useMovieContext();
  const movies = propMovies ?? context.movies;

  // Track current pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Responsive design: fewer movies on mobile
  const isMobile = window.innerWidth < 768;
  const moviesPerPage = isMobile ? 4 : 6;

  // Calculate start and end indexes for the current page
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const paginatedMovies = movies.slice(startIndex, endIndex);

  // Show fallback message if no movies are available
  if (!movies || movies.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No hay películas para mostrar.</p>
    );
  }

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
