import { useState } from 'react'
import type { ReactNode } from "react"
import { MovieContext } from './MovieContext'
//import type { MovieContextType } from "./MovieContext"
import type { Movie } from "../types"

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  return (
    <MovieContext.Provider
      value={{ search, setSearch, movies, setMovies, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  )
}
