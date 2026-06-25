import'./movieCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const starNumber = i + 1;
    const filled = movie.rate >= starNumber;
    return (
      <span key={starNumber} className={filled ? 'star filled' : 'star'}>
        ★
      </span>
    );
  });

  return (
    <div className='movie-card'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <div className='rating-stars' aria-label={`Rating: ${movie.rate} stars`}>
            {stars}
          </div>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;

