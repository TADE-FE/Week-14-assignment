import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <p>{review.text}</p>
      <div className="review-rating">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
};

export default Review;
