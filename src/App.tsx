import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function App() {
  const handleSearch = (query: string) => {
    console.log("Buscar:", query);
    // después conectamos esto a la API real
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
