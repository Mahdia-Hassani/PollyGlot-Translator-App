import { languages } from "../utils/languages";

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-box">
      <p>Select Language</p>

      {languages.map((lang) => (
        <label key={lang.code}>
          <input
            type="radio"
            name="language"
            checked={language.code === lang.code}
            onChange={() => setLanguage(lang)}
          />

          {lang.label}
        </label>
      ))}
    </div>
  );
}
