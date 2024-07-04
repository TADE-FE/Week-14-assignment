import React, { useState } from 'react';

const ReviewForm = ({ movieId, addReview }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      text,
      rating
    };
    addReview(movieId, newReview);
    setText('');
    setRating(1);
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Write your review here..."
        required
      />
      <div className="rating">
        <span>Rating: </span>
        {[1, 2, 3, 4, 5].map(star => (
          <span 
            key={star}
            className={star <= rating ? 'filled' : ''}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
