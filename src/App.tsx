import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";

const mockMovies = [
  {
    id: "1",
    title: "Inception",
    year: "2010",
    country: "USA",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VbawmUXYOQJ81ybhW3Ee1u6qXIntaOKK-g&s",
  },
  {
    id: "2",
    title: "Parasite",
    year: "2019",
    country: "South Korea",
    poster: "https://assets.mubicdn.net/images/notebook/post_images/29833/images-w1400.jpg?1579571205",
  },
];

export default function App() {
  const handleSearch = (query: string) => {
    console.log("Buscar:", query);
    // después conectamos esto a la API real
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div className="max-w-4xl mx-auto py-10">
        <MovieGrid movies={mockMovies} />
      </div>
    </>
  );
}
