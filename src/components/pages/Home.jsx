import { useNavigate } from "react-router-dom";

import useTranslate from "../hooks/useTranslate";

import { translateText } from "../services/translatorApi";

import TextInput from "../translator/TextInput/textInput";
import LanguageSelector from "../translator/LanguageSelector/languageSelector";
import TranslateButton from "../translator/TranslateButton/translateButton";

import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";

export default function Home() {
  const navigate = useNavigate();

  const {
    text,
    setText,
    language,
    setLanguage,
    setTranslation,
    loading,
    setLoading,
    error,
    setError,
  } = useTranslate();

  async function handleTranslate() {
    if (!text.trim()) return;

    try {
      setLoading(true);
      setError("");

      const result = await translateText(text, language.label);

      setTranslation(result);

      navigate("/result");
    } catch (error) {
      setError(error.message || "Translation failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="translator-card">
      <TextInput text={text} setText={setText} />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      {loading && <Loader />}

      <ErrorMessage message={error} />

      <TranslateButton
        onClick={handleTranslate}
        disabled={!text.trim() || loading}
      />
    </div>
  );
}
