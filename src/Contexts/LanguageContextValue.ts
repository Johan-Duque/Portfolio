import { createContext } from "react";

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);