import React from 'react';

const Stars = ({ rating, updateRating }) => {
  const handleClick = (newRating) => {
    updateRating(newRating);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span 
          key={star}
          className={star <= rating ? 'filled' : ''}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;

