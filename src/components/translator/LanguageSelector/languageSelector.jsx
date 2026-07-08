import "./languageSelector.css";
import { languages } from "../../utils/languages";

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-box">
      <p className="language-title">Select Language</p>

      <div className="language-list">
        {languages.map((lang) => (
          <label key={lang.code} className="language-option">
            <input
              type="radio"
              name="language"
              checked={language.code === lang.code}
              onChange={() => setLanguage(lang)}
            />

            <img src={lang.flag} alt={lang.label} className="flag" />

            <span className="label-text">{lang.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
