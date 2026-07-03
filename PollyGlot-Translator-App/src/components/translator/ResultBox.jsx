export default function ResultBox({ text, translation, language }) {
  return (
    <div>
      <h2>Translation Result</h2>

      <p>
        <strong>Original:</strong>
      </p>

      <p>{text}</p>

      <br />

      <p>
        <strong>{language.label}:</strong>
      </p>

      <p>{translation}</p>
    </div>
  );
}
