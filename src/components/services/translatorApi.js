const API_URL = "https://pollyglot-worker.mahdiahassani2009.workers.dev";

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
