import { createContext, useContext, useEffect, useState } from "react";
import { vi } from "../locales/vi";
import { en } from "../locales/en";

const translations = { vi, en };

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "vi";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "vi" ? "en" : "vi"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export const useLanguage = () => useContext(LanguageContext);
