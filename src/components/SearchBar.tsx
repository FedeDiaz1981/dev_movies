import { useMovieContext } from "../context/useMovieContext"
import { fetchMoviesByTitle } from "../services/movieService"

export default function SearchBar() {
  const { search, setSearch, setMovies } = useMovieContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const results = await fetchMoviesByTitle(search)
    setMovies(results)
  }

  return (
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
  )
}
