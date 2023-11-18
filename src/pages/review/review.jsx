/* eslint-disable no-unused-vars */
import React from "react";

import Star from "../../components/review/star";

export default function Review() {
  const apiStarValue = 3;
  return (
    <div>
      <Star starValue={apiStarValue} />
    </div>
  );
}
