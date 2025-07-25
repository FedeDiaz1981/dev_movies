const API_KEY = "b4c684d2"; 
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesBySearch = async (query: string) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search || []; 
};
