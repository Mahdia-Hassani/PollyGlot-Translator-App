import "./resultBox.css";

export default function ResultBox({ text, translation, language }) {
  return (
    <div className="result-wrapper">
      <section className="result-section">
        <h2>Original Text</h2>

        <div className="result-content">{text}</div>
      </section>

      <section className="result-section">
        <h2>{language.label} Translation</h2>

        <div className="result-content">
          {translation || "No translation available"}
        </div>
      </section>
    </div>
  );
}
