const API_URL = "https://www.omdbapi.com/";
const API_KEY = "b4c684d2"; 

type APIMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Country: string;
};



export const fetchMoviesByTitle = async (title: string) => {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
  const data = await response.json();
  
  if (data.Response === "True") {
    return data.Search.map((movie: APIMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      country: "N/A", 
      poster: movie.Poster,
    }));
  } else {
    return [];
  }
};

export const fetchMovieById = async (id: string) => {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();

  console.log("🔍 Movie data by ID:", data); 

  if (data.Response === "True") {
    return{
      id: data.imdbID,
      title: data.Title,
      year: data.Year,
      country: data.Country,
      poster: data.Poster,
      genre: data.Genre,
      plot: data.Plot,
      actors: data.Actors,
      rating: data.imdbRating,
    } 
  }

  return null;
};
