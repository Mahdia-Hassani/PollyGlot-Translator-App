export default function TextInput({ text, setText }) {
  return (
    <div className="input-box">
      <label>Text to translate</label>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
