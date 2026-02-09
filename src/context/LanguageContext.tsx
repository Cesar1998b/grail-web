"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/translations/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Solo ejecutar en cliente
    if (typeof window === "undefined") return "es";
    
    // Intentar cargar del localStorage
    const saved = localStorage.getItem("grail-language") as Language | null;
    if (saved) return saved;
    
    // Detectar del navegador
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "en" ? "en" : "es";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("grail-language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
