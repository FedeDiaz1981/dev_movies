/**
 * MovieModal component
 *
 * This component renders a modal displaying detailed information about a selected movie.
 * The modal is only visible when `selectedMovie` is set in the global context.
 * Users can close the modal using the close button (×) or the "Cerrar" button.
 *
 * Behavior:
 * - Shows poster, title, year, country, genre, actors and plot.
 * - If the poster is not available ("N/A"), a fallback image is shown.
 * - Uses ARIA role `dialog` for accessibility.
 * - Closes the modal by setting `selectedMovie` to null.
 */

import { useMovieContext } from "../context/useMovieContext";

export default function MovieModal() {
  const { selectedMovie, setSelectedMovie } = useMovieContext();

   // If no movie is selected, don't render the modal
  if (!selectedMovie) return null;

  const isValidPoster = selectedMovie.poster && selectedMovie.poster !== "N/A";

  return (
    <div role="dialog" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4" >
      <div className="bg-white w-full max-w-2xl rounded-lg p-6 shadow-lg relative grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Cerrar */}
        <button
          onClick={() => setSelectedMovie(null)}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        {/* Poster */}
        <div className="col-span-1 flex items-center justify-center">
          {isValidPoster ? (
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              onError={(e) => {
                e.currentTarget.src = "../src/assets/image_not_available.png";
              }}
              className="h-64 w-full object-contain"
            />
          ) : (
            <img
              src="../src/assets/image_not_available.png"
              alt={selectedMovie.title}
              className="h-64 w-full object-contain"
            />
          )}
        </div>

        {/* Datos */}
        <div className="col-span-2 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Título: {selectedMovie.title}
          </h2>
          <p>
            <strong>Año:</strong> {selectedMovie.year}
          </p>
          <p>
            <strong>País:</strong> {selectedMovie.country}
          </p>
          <p>
            <strong>Género:</strong> {selectedMovie.genre}
          </p>
          <p>
            <strong>Actores:</strong> {selectedMovie.actors}
          </p>

          <div>
            <p className="font-semibold mt-2">Sinopsis:</p>
            <div className="w-full min-h-[100px] bg-gray-100 text-sm p-2 rounded text-gray-700 whitespace-pre-wrap">
              {selectedMovie.plot}
            </div>
          </div>
          
         {/*Botón cerrar*/}
          <button
            onClick={() => setSelectedMovie(null)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 float-right"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
