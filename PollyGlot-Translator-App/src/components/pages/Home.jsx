import { useNavigate } from "react-router-dom";

import useTranslate from "../hooks/useTranslate";

import TextInput from "../translator/TextInput";
import LanguageSelector from "../translator/LanguageSelector";
import TranslateButton from "../translator/TranslateButton";

export default function Home() {
  const navigate = useNavigate();

  const { text, setText, language, setLanguage, setTranslation } =
    useTranslate();

  function handleTranslate() {
    setTranslation("Translation will appear here after API integration.");

    navigate("/result");
  }

  return (
    <>
      <h2>Translate Text</h2>

      <TextInput text={text} setText={setText} />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <TranslateButton onClick={handleTranslate} disabled={!text.trim()} />
    </>
  );
}
