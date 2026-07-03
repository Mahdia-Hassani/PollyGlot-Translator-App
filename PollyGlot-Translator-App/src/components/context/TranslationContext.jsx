import { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState({
    code: "en",
    label: "English",
  });

  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const value = {
    text,
    setText,
    language,
    setLanguage,
    translation,
    setTranslation,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  return useContext(TranslationContext);
}
