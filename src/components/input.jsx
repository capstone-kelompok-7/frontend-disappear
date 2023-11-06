function Input(props) {
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

export default Input;
