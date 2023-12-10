import clsx from "clsx";

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

function Select(props) {
  const { label, placeholder, id, error, options, register, name, value } =
    props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-black dark:text-white tracking-wider mb-3"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className={clsx(
          "flex h-10 w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 cursor-pointer",
          !error && "border-slate-200"
        )}
        value={value}
        defaultValue=""
        {...(register ? register(name) : {})}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error &&  (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}


export { Inputt, Select };
