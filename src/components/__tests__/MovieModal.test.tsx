/**
 * MovieModal.test.tsx
 *
 * Integration test for the <MovieModal /> component.
 * Ensures that the modal renders properly when a movie is selected via context,
 * and verifies that all key movie details are displayed as expected.
 *
 * Test Cases:
 *
 * 1. "renders modal with selected movie details"
 *    - Mocks a selected movie via MovieContext.
 *    - Confirms that the modal is visible in the DOM.
 *    - Asserts that the movie's title, genre, actors, and "Cerrar" button are rendered.
 *
 * Tools Used:
 * - @testing-library/react for component rendering and querying
 * - MovieContext mock to simulate app state
 * - mockMovie.ts as reusable test data
 */

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieContext } from "../../context/MovieContext";
import MovieModal from "../MovieModal";
import { mockMovie } from "./mockMovie";

describe("App Integration Test Suite", () => {
  it("renders modal with selected movie details", () => {
    render(
      <MovieContext.Provider
        value={{
          selectedMovie: mockMovie,
          setSelectedMovie: vi.fn(),
          movies: [],
          setMovies: vi.fn(),
          currentPage: 1,
          setCurrentPage: vi.fn(),
          search: "",
          setSearch: vi.fn(),
        }}
      >
        <MovieModal />
      </MovieContext.Provider>
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/Sci-Fi/i)).toBeInTheDocument();
    expect(screen.getByText(/Leonardo DiCaprio/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar/i)).toBeInTheDocument();
  });
});
