export default function ErrorMessage({ message }) {
  if (!message) return null;

  return <p>{message}</p>;
}
