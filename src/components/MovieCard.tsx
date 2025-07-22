import React from "react";

type Props = {
  movie: {
    title: string;
    year: string;
    country?: string;
    poster: string;
  };
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
      <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.year} • {movie.country}</p>
      </div>
    </div>
  );
}
