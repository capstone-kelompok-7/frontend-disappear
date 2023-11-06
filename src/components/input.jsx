import React from "react";

function Input(props) {
  const { label, className} = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-black mb-3">
        {label}
      </label>
      <input className={className} />
    </div>
  );
}

export default Input;
