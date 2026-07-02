import useTranslate from "../utils/UseTranslate";
import TextInput from "../translator/TextInput";
import LanguageSelector from "../translator/LanguageSelector";
import TranslateButton from "../translator/TranslateButton";

export default function Home() {
  const { text, setText, language, setLanguage } = useTranslate();

  const handleTranslate = () => {
    console.log("Text:", text);
    console.log("Language:", language);
  };

  return (
    <div className="home">
      <h2>Translate Text</h2>

      <TextInput text={text} setText={setText} />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <TranslateButton onClick={handleTranslate} disabled={!text.trim()} />
    </div>
  );
}
