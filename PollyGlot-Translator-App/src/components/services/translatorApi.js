const API_URL = "http://127.0.0.1:8787";

export async function translateText(text, language) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      language,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Translation failed");
  }

  return data.translation;
}
