export default function TranslateButton({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Translate
    </button>
  );
}
