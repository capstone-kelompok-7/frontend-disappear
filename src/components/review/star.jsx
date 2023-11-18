/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Star({ starValue }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="rating">
        {stars.map((star, index) => (
          <input
            key={index}
            type="radio"
            name="rating-2"
            className={`mask mask-star-2
            bg-orange-400`}
            checked={star <= starValue}
            readOnly
          />
        ))}
      </div>
    </>
  );
}

export default Star;
