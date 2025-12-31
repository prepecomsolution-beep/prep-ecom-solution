"use client";

import CookieSetter from "@/utils/cookieSetter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LangType } from "@/i18n/request";

export const LangVar = ["english", "spanish", "chines", "bangali", "urdu"] as LangType[];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState<LangType>("english");
  const router = useRouter();

  // Read cookie on client
  useEffect(() => {
    const match = document.cookie.split("; ").find((row) => row.startsWith("lang="));

    if (match) {
      const value = match.split("=")[1] as LangType;
      setSelectedLang(value);
    }
  }, []);

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value as LangType;

    setSelectedLang(lang);
    CookieSetter({ key: "lang", value: lang });
    router.refresh();
  }

  return (
    <div className="flex items-center text-sm">
      <select id="langSelector" value={selectedLang} onChange={changeLanguage} className="p-2 bg-primary border-none rounded-sm text-white">
        {LangVar.map((lang) => (
          <option key={lang} className="border-none outline-0 capitalize" value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
