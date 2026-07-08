import "./TextInput.css";

export default function TextInput({ text, setText }) {
  return (
    <div className="input-box">
      <label htmlFor="translation-text" className="input-label">
        Text to translate 👇
      </label>

      <textarea
        id="translation-text"
        className="translation-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you?"
      />
    </div>
  );
}
