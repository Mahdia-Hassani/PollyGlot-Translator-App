import "./translatorButton.css";

export default function TranslateButton({ onClick, disabled }) {
  return (
    <button className="translate-btn" onClick={onClick} disabled={disabled}>
      Translate
    </button>
  );
}
