export default function Button(props) {
  const { label, icon, onClick, type } = props;
  return (
    <button onClick={onClick} type={type} {...props}>
      <div className="flex items-center gap-1">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
}
