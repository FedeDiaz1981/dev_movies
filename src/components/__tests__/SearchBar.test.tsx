/**
 * SearchBar.test.tsx
 *
 * Unit test for the <SearchBar /> component.
 * Validates that the component correctly updates the search state
 * when the user inputs a movie title and submits the form.
 *
 * Test Case:
 *
 * 1. "updates the search state with the entered value on submit"
 *    - Simulates typing a movie title into the input field.
 *    - Triggers the submit event by clicking the "Buscar" button.
 *    - Asserts that `setSearch` was called with the entered value.
 *
 * Tools Used:
 * - @testing-library/react for rendering and user simulation
 * - fireEvent for simulating input and clicks
 * - Mocked MovieContext to isolate and test SearchBar behavior
 */

import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'
import { MovieContext } from '../../context/MovieContext'
import { vi } from 'vitest';

describe('SearchBar', () => {
  it('actualiza el estado con el valor buscado al hacer submit', () => {
    const mockSetSearch = vi.fn()
    const mockSetMovies = vi.fn()

    render(
      <MovieContext.Provider
        value={{
          search: '',
          setSearch: mockSetSearch,
          movies: [],
          setMovies: mockSetMovies,
          selectedMovie: null,
          setSelectedMovie: vi.fn(),
          currentPage: 1,
          setCurrentPage: vi.fn(),
        }}
      >
        <SearchBar />
      </MovieContext.Provider>
    )

    const input = screen.getByPlaceholderText(/película/i)
    const button = screen.getByRole('button', { name: /buscar/i })

    fireEvent.change(input, { target: { value: 'Batman' } })
    fireEvent.click(button)

    expect(mockSetSearch).toHaveBeenCalledWith('Batman')
  })
})
