"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Define the type for translations
type Translations = { [key: string]: string };

// Define the context type
type TranslationContextType = {
  translations: Translations;
  setTranslations: (translations: Translations) => void;
};

// Create the context with default values
const TranslationContext = createContext<TranslationContextType>({
  translations: {},
  setTranslations: () => {},
});

// Create a provider component
type TranslationProviderProps = {
  children: ReactNode;
  initialTranslations?: { en: Translations; si: Translations };
};

export const TranslationProvider = ({
  children,
  initialTranslations = { en: {}, si: {} },
}: TranslationProviderProps) => {
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";
  const [translations, setTranslations] = useState<Translations>(
    initialTranslations[lang]
  );

  useEffect(() => {
    setTranslations(initialTranslations[lang]);
  }, [lang]);

  return (
    <TranslationContext.Provider value={{ translations, setTranslations }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Create a custom hook to use translations
export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslations must be used within a TranslationProvider"
    );
  }
  return context;
};
