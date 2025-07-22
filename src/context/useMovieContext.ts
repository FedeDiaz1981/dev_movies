import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovieContext debe usarse dentro de MovieProvider");
  return context;
};
