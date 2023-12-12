import React from "react";

function Stars({ userReview }) {
  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(
      <input
        key={i}
        className={`mask mask-star-2
      ${i >= userReview ? "bg-orange-100" : "bg-orange-400"}`}
        readOnly
      />
    );
  }

  return (
    <>
      <div className="rating">{elements}</div>
    </>
  );
}

export default Stars;
