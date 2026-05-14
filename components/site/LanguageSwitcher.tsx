"use client";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "Français" },
];

export function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");

  return (
    <div className="flex items-center gap-2">
      <select
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="bg-transparent text-xs text-text-muted border border-border-soft rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-aurora-1/50"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
