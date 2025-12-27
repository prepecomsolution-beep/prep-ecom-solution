// "use client";

// import CookieSetter from "@/utils/cookieSetter";
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LanguageSelector() {
//   const langSelector = useRef<HTMLSelectElement>(null);
//   const [selectedLang, setSelectedLang] = useState<"spanish" | "english">("english");
//   const router = useRouter();

//   useEffect(() => {
//     cookieStore.get("lang").then((e) => {
//       const val = e?.value as "english" | "spanish";
//       setSelectedLang(val);
//     });
//   }, []);

//   function changeLanguage() {
//     const selectedLang = langSelector.current?.value as "english" | "spanish";

//     if (!selectedLang) return;

//     CookieSetter({ key: "lang", value: selectedLang });
//     router.refresh();
//   }

//   return (
//     <div className="absolute right-10 top-0 z-200 bg-amber-400">
//       <select ref={langSelector} id="langSelector" onChange={changeLanguage} defaultValue="english">
//         <option selected={selectedLang === "english"} defaultValue="english">
//           English
//         </option>
//         <option selected={selectedLang === "spanish"} defaultValue="spanish">
//           Spanish
//         </option>
//       </select>
//     </div>
//   );
// }
"use client";

import CookieSetter from "@/utils/cookieSetter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Lang = "english" | "spanish";

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState<Lang>("english");
  const router = useRouter();

  // Read cookie on client
  useEffect(() => {
    const match = document.cookie.split("; ").find((row) => row.startsWith("lang="));

    if (match) {
      const value = match.split("=")[1] as Lang;
      setSelectedLang(value);
    }
  }, []);

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value as Lang;

    setSelectedLang(lang);
    CookieSetter({ key: "lang", value: lang });
    router.refresh();
  }

  return (
    <div className="flex items-center text-sm">
      <select id="langSelector" value={selectedLang} onChange={changeLanguage} className="p-2 bg-primary border-none rounded-sm text-white">
        <option className="border-none outline-0" value="english">
          English
        </option>
        <option className="border-none outline-0" value="spanish">
          Spanish
        </option>
      </select>
    </div>
  );
}
