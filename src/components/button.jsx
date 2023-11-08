import React from "react";

export default function Button(props) {
  const { label, icon } = props;
  return (
    <button {...props}>
      <div className="flex items-center">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
}