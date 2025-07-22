import { useMovieContext } from "../context/useMovieContext"
import MovieCard from "./MovieCard"

export default function MovieGrid() {
  const { movies } = useMovieContext()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
