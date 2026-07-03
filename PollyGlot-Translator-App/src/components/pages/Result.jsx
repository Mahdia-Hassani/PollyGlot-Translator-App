import { Navigate } from "react-router-dom";

import useTranslate from "../hooks/useTranslate";

import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import ResultBox from "../translator/ResultBox/resultBox";

export default function Result() {
  const { text, language, translation, loading, error } = useTranslate();

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
    <ResultBox text={text} translation={translation} language={language} />
  );
}
