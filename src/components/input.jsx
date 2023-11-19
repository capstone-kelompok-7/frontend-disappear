function Inputt(props) {
  const { label, type, className, placeholder, hidden, name, value, onChange } =
    props;

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-black font-bold mb-3">{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        hidden={hidden}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

import React from "react";

function Select(props) {
  const { label, options, value, onChange } = props;
  return (
    <div className="flex flex-col mb-4 text-black">
      <label className="text-black mb-3">{label}</label>
      <select
        className="rounded-lg text-black p-1"
        value={value}
        onChange={onChange}
      >
        {" "}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export { Inputt, Select };
