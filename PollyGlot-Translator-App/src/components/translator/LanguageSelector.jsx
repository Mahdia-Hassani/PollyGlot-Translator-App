import { languages } from "../utils/languages";

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-box">
      <p>Select Language</p>

      {languages.map((lang) => (
        <label key={lang} style={{ display: "block" }}>
          <input
            type="radio"
            name="language"
            value={lang}
            checked={language === lang}
            onChange={(e) => setLanguage(e.target.value)}
          />
          {lang}
        </label>
      ))}
    </div>
  );
}
