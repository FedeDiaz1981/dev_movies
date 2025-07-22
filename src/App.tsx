import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieProvider"
import SearchBar from "./components/SearchBar"
import MovieGrid from "./components/MovieGrid"

function App() {
  return (
    
    <MovieProvider>
      <Navbar />
      <div className="container">
        <SearchBar />
        <MovieGrid />
      </div>
    </MovieProvider>
  )
}

export default App
