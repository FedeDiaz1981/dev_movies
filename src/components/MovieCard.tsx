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
      {movie.poster === "N/A" ? (
        <div className="h-64 w-full flex items-center justify-center bg-gray-200 text-sm text-gray-600">
          Imagen no disponible
        </div>
      ) : (
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-64 w-full object-contain bg-gray-100"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600">
          {movie.year} 
        </p>
      </div>
    </div>
  );
}
