import React from "react";
import MovieCard from "./MovieCard";

type Movie = {
  id: string;
  title: string;
  year: string;
  country: string;
  poster: string;
};

type Props = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mt-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
