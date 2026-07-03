import { Navigate, useNavigate } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import "./Result.css";

export default function Result() {
  const navigate = useNavigate();

  const { text, language, translation, loading, error } = useTranslate();

  if (!text) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="result-container">
      <h2 className="result-title">Translation Result</h2>

      {/* Original */}
      <div className="result-box">
        <h3>Original Text</h3>
        <p>{text}</p>
      </div>

      {/* Translation */}
      <div className="result-box highlight">
        <h3>Translated ({language.label})</h3>
        <p>
          {translation || "Translation will appear here after API integration."}
        </p>
      </div>

      {/* Button */}
      <button className="start-over-btn" onClick={() => navigate("/")}>
        Start Over
      </button>
    </div>
  );
}
