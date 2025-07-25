/**
 * SearchBar Component
 *
 * This component provides a search interface for users to find movies by title.
 * It uses the shared movie context to update the search query and movie list.
 *
 * Features:
 * - Controlled input field to capture the movie title.
 * - Validation rules:
 *    - Title must not be empty.
 *    - Title must have at least 3 characters.
 *    - Only letters, numbers, and spaces are allowed.
 * - Displays appropriate error messages if validation fails.
 * - On valid submission, fetches movies from the API and updates the movie list.
 *
 * Technologies used:
 * - React hooks (`useState`, `useContext`)
 * - Tailwind CSS for styling
 */

import { useState } from "react";
import { useMovieContext } from "../context/useMovieContext";
import { fetchMoviesByTitle } from "../services/movieService";

export default function SearchBar() {
  const { search, setSearch, setMovies } = useMovieContext();
  const [error, setError] = useState("");

  const validSearchRegex = /^[a-zA-Z0-9\s]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    //Validations start

    if (search.trim() === "") {
      setError("Por favor ingresá un título.");
      return;
    }

    if (search.length < 2) {
      setError("El título debe tener al menos 3 caracteres.");
      return;
    }

      if (!validSearchRegex.test(search)) {
    setError("Solo se permiten letras, números y espacios.");
    return;
  }


    //if there aren't any error, then setError it´s sets as empty
    setError("");

  //Validations end
    const results = await fetchMoviesByTitle(search);
    setMovies(results);
  };

  return (
    <>
    
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mt-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ingrese Película..."
        className="border px-4 py-2 rounded w-[300px]"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
      
    </form>
    {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </>
    
  );
}
