import { createContext, useContext } from "react";

// Define a type for the language translator context
type LanguageTranslator = {
  language: { [key: string]: string }; // Object representing the language translations
  setLanguage: React.Dispatch<React.SetStateAction<string>>; // Function to update the language
};

// Create a context with the type LanguageTranslator, initialized to undefined
/**
 * LanguageTranslator: Context to store the language translations and the function to update the language
   * @param language: Object representing the language translations (key:value pair)
   * @param setLanguage: Function to update the language (string value)
   
   */
const LanguageTranslator = createContext<LanguageTranslator | undefined>(
  undefined
);

// Custom hook to use the LanguageTranslator context
/**
 * useLanguageTranslator: Custom hook to use the LanguageTranslator context
 * @returns Context to store the language translations and the function to update the languag
 * @example
 * const { language: t, setLanguage } = useLanguageTranslator();
 * setLanguage("fr");
 * @usage
 * t.hello // "Bonjour" // "नमस्ते"... etc
 */
const useLanguageTranslator = (): LanguageTranslator => {
  // Get the context value
  const context = useContext(LanguageTranslator);
  // If the context is undefined, throw an error
  if (context === undefined) {
    throw new Error(
      "useLanguageTranslator must be used within a LanguageTranslatorProvider"
    );
  }
  // Return the context value
  return context;
};

export { LanguageTranslator, useLanguageTranslator };
