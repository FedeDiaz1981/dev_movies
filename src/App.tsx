import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieProvider";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <div className="px-8">
        <SearchBar />
        <div className="py-5">
          <MovieGrid />
        </div>
        <MovieModal />
      </div>
    </MovieProvider>
  );
}

export default App;
