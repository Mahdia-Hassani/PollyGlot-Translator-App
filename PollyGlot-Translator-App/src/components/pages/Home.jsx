import { useNavigate } from "react-router-dom";

import useTranslate from "../hooks/useTranslate";

import TextInput from "../translator/TextInput/textInput";
import LanguageSelector from "../translator/LanguageSelector/languageSelector";
import TranslateButton from "../translator/TranslateButton/translateButton";

export default function Home() {
  const navigate = useNavigate();

  const { text, setText, language, setLanguage, setTranslation } =
    useTranslate();

  function handleTranslate() {
    setTranslation("Translation will appear here after API integration.");

    navigate("/result");
  }

  return (
    <div className="translator-card">
      <TextInput text={text} setText={setText} />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <TranslateButton onClick={handleTranslate} disabled={!text.trim()} />
    </div>
  );
}
