export const keepLastWordsTogether = (text: string, wordCount = 2): string => {
  const trimmed = text.trim();
  if (!trimmed) return text;

  const words = trimmed.split(/\s+/);
  if (words.length <= wordCount) return trimmed;

  const start = words.slice(0, -wordCount).join(" ");
  const end = words.slice(-wordCount).join("\u00A0");
  return `${start} ${end}`;
};
