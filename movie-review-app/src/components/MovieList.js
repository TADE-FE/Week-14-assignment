import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, addReview, updateRating }) => {
  return (
    <div>
      {movies.map(movie => (
        <Movie 
          key={movie.id} 
          movie={movie} 
          addReview={addReview}
          updateRating={updateRating}
        />
      ))}
    </div>
  );
};

export default MovieList;
