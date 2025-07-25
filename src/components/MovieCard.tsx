/**
 * MovieCard component
 *
 * This component displays a movie card with basic information such as the title, year, and poster.
 * When the user clicks on the card, it fetches the full movie details from the API and updates
 * the selected movie in the context, which opens the detail modal.
 *
 * Props:
 * - movie: An object representing a movie with properties:
 *   - id: Unique movie identifier (used to fetch details).
 *   - title: Movie title.
 *   - year: Release year.
 *   - country (optional): Country of origin.
 *   - poster: Poster image URL or "N/A".
 *   - Type (optional): Type of media (e.g., "movie", "series").
 *   - Plot (optional): Short description.
 *   - Genre (optional): Movie genre.
 */

import { useMovieContext } from "../context/useMovieContext";
import { fetchMovieById } from "../services/movieService";

type Props = {
  movie: {
    title: string;
    year: string;
    country?: string;
    poster: string;
    id: string;
    Type?: string;
    Plot?: string;
    Genre?: string;
  };
};

export default function MovieCard({ movie }: Props) {
  const { setSelectedMovie } = useMovieContext();

 /**
   * When a card is clicked, fetch detailed movie info and set it as the selected movie.
   * This will trigger the modal to display.
   */
  const handleClick = async () => {
    const data = await fetchMovieById(movie.id);
    if (data) {
      console.log(data);
      setSelectedMovie(data);
    }
  };

  const isValidPoster = movie.poster && movie.poster !== "N/A";

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
        {/**
        *If image isn't available or throw an error when is tried to be load, 
        *the card shows "image not available" 
        */}
        {isValidPoster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.src = "../src/assets/image_not_available.png";
            }}
            className="h-64 w-full object-contain"
          />
        ) : (
          <div className="h-64 w-full flex items-center justify-center">
            <img
              src="../src/assets/image_not_available.png"
              alt={movie.title}
              className="h-64 w-full object-contain"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold">{movie.title}</h2>
          <p className="text-sm text-gray-600">{movie.year}</p>
        </div>
      </div>
    </div>
  );
}
