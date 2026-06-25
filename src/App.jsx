import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/movieList/MovieList'
import { moviesData } from './data/moviesData.js'
import { useMemo, useState } from 'react'
import AddMovie from './components/addMovie/AddMovie'
import FilterByTitle from './components/filterByTitle/FilterByTitle'
import FilterByRate from './components/filterByRate/FilterByRate'

function App() {
  // Source of truth for all movies (including added ones)
  const [allMovies, setAllMovies] = useState(moviesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [ratingFilter, setRatingFilter] = useState('')

  const addMovie = (movieWithoutId) => {
    const newMovie = {
      ...movieWithoutId,
      id: allMovies.length ? Math.max(...allMovies.map((m) => m.id)) + 1 : 1,
    }
    setAllMovies((prev) => [...prev, newMovie])
  }

  const filteredMovies = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()
    let result = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(term)
    )

    if (ratingFilter) {
      const rating = parseInt(ratingFilter, 10)
      result = result.filter((movie) => movie.rate === rating)
    }

    return result
  }, [allMovies, searchTerm, ratingFilter])

  return (
    <>
      <h1>Movie App</h1>
      <FilterByTitle
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onFilter={() => {}}
      />
      <FilterByRate onRatingChange={setRatingFilter} ratingFilter={ratingFilter} />
      <AddMovie onAddMovie={addMovie} />
      <MovieList
        movies={filteredMovies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        ratingFilter={ratingFilter}
      />
    </>
  )
}
export default App
