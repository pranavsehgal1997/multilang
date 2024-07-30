import { createContext, useContext } from "react";

type LanguageTranslator = {
  language: { [key: string]: string };
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageTranslator = createContext<LanguageTranslator | undefined>(
  undefined
);

const useLanguageTranslator = (): LanguageTranslator => {
  const context = useContext(LanguageTranslator);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
};

export { LanguageTranslator, useLanguageTranslator };
