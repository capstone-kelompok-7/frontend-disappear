import React from "react";

const Label = ({ htmlFor, style, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium`}
      style={style}
    >
      {children}
    </label>
  );
};

export default Label;
