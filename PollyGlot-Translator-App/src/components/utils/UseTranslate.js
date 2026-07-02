import { useState } from "react";

export default function useTranslate() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("English");

  return {
    text,
    setText,
    language,
    setLanguage,
  };
}
