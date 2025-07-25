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
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&plot=full`);
  const data = await response.json();
  console.log(data);

  if (data.Response === "True") {
    return data.Search.map((movie: APIMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster ?? "N/A",
    }));
  } else {
    return [];
  }
};
