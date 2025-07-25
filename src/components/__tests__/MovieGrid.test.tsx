/**
 * MovieGrid.test.tsx
 *
 * Unit and integration tests for the <MovieGrid /> component.
 * These tests ensure that the component properly renders paginated movie cards,
 * handles user navigation through pages, and displays fallback content when no movies are present.
 *
 * Test Cases:
 *
 * 1. "renders movies and navigates between pages"
 *    - Verifies that the component initially renders the first 6 movies.
 *    - Simulates a click on the "Next" button and verifies that the next set of movies is displayed.
 *    - Simulates a click on the "Previous" button and checks that the first page is restored.
 *
 * 2. "shows message if there are no movies"
 *    - Ensures that when the movie list is empty, a fallback message is displayed.
 *
 * Tools Used:
 * - @testing-library/react for rendering and simulating interactions
 * - fireEvent for button clicks
 * - Mock MovieContext to simulate context behavior in isolation
 */

import { render, screen, fireEvent } from "@testing-library/react";
import MovieGrid from "../MovieGrid";
import type { Movie } from "../../types";
import { MovieContext } from "../../context/MovieContext";

const mockMovies: Movie[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i}`,
  title: `Película ${i + 1}`,
  year: "2023",
  country: "USA",
  poster: "https://example.com/poster.jpg",
  imdbID: `${i}`,
  type: "movie"
}));

describe("MovieGrid", () => {
  test("renderiza películas y navega entre páginas", () => {
    render(
      <MovieContext.Provider
        value={{
          movies: mockMovies,
          setMovies: () => {},
          search: "",
          setSearch: () => {},
          selectedMovie: null,
          setSelectedMovie: () => {},
          currentPage: 1,
          setCurrentPage: () => {},
        }}
      >
        <MovieGrid />
      </MovieContext.Provider>
    );

   
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`Película ${i}`)).toBeInTheDocument();
    }

    
    expect(screen.queryByText("Película 7")).not.toBeInTheDocument();

    
    fireEvent.click(screen.getByRole("button", { name: /siguiente/i }));

    
    expect(screen.getByText("Película 7")).toBeInTheDocument();
    expect(screen.getByText("Película 10")).toBeInTheDocument();

    
    expect(screen.queryByText("Película 1")).not.toBeInTheDocument();

    
    fireEvent.click(screen.getByRole("button", { name: /anterior/i }));
    expect(screen.getByText("Película 1")).toBeInTheDocument();
  });

 test("muestra mensaje si no hay películas", () => {
  render(
    <MovieContext.Provider
      value={{
        movies: [],
        setMovies: () => {},
        search: "",
        setSearch: () => {},
        selectedMovie: null,
        setSelectedMovie: () => {},
        currentPage: 1,
        setCurrentPage: () => {},
      }}
    >
      <MovieGrid />
    </MovieContext.Provider>
  );

  expect(screen.getByText(/no hay películas/i)).toBeInTheDocument();
});
});
