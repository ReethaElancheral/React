
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY= "39e8286a";

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          throw new Error(data.Error);
        }
      })
      .catch(err => console.error("Error fetching details:", err));
  }, [id]);

  if (!movie) return <p>Loading details...</p>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
