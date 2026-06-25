import './movielist.css'
import MovieCard from '../movieCard/MovieCard'
const MovieList = ({ movies }) => {
  return (
    <div className='movies'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
