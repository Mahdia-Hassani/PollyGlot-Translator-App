import { Navigate, useNavigate } from "react-router-dom";

import useTranslate from "../hooks/useTranslate";

import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import ResultBox from "../translator/ResultBox/resultBox";

export default function Result() {
  const navigate = useNavigate();

  const {
    text,
    language,
    translation,
    loading,
    error,
    setText,
    setTranslation,
  } = useTranslate();

  function handleStartOver() {
    setText("");
    setTranslation("");

    navigate("/");
  }

  if (!text) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="translator-card">
      <ResultBox text={text} translation={translation} language={language} />

      <button
        className="translate-btn start-over-btn"
        onClick={handleStartOver}
      >
        Start Over
      </button>
    </div>
  );
}
