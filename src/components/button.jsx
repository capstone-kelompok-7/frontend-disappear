export default function Button(props) {
  const { label, className } = props;
  return <button className={className}>{label}</button>;
}
