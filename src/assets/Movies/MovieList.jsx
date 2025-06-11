

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY= "39e8286a";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel&type=movie`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          throw new Error(data.Error);
        }
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies.");
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>🎬 OMDb Movie List</h2>
      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title} ({movie.Year})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
