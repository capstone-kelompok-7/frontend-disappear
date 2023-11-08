import React from "react";

export default function Button(props) {
  const { label, icon, onClick } = props;
  return (
    <button onClick={onClick} {...props}>
      <div className="flex items-center">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
}