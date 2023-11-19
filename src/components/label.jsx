import React from "react";

const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
