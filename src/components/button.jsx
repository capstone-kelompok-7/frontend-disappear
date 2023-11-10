export default function Button(props) {
  const { label, icon, onClick } = props;
  return (
    <button onClick={onClick} {...props}>
      <div className="flex items-center gap-1">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
}
