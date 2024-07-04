import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, addReview, updateRating }) => {
  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} updateRating={(rating) => updateRating(movie.id, rating)} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movieId={movie.id} addReview={addReview} />
    </div>
  );
};

export default Movie;

