import { createContext, useContext } from "react";

// Define a type for the language translator context
type LanguageTranslator<T> = {
  /**
   * Object representing the language translations (key:value pair)
   * @example
   * export const ENGLISH ={
   *  hello: "Hello",
   * }
   *
   * export const HINDI ={
   *  hello: "नमस्ते"
   * }
   */
  language: T; // Object representing the language translations
  /**
   * Function to update the language
   * @param selectedLanguage: Accepts a string value representing the language
   * @example
   * setLanguage("english");
   */
  setLanguage: (selectedLanguage: string) => void; // Function to update the language
};

// Create a context with the type LanguageTranslator, initialized to undefined
/**
 * LanguageTranslator: Context to store the language translations and the function to update the language
   * @param language: Object representing the language translations (key:value pair)
   * @param setLanguage: Function to update the language (string value)
   * @example
   * const [language, setLanguage] = useState<string>("english");
     const languageData = useMemo(
       () => (language === "english" ? ENGLISH : HINDI),
       [language]
     );

    return (
      <AuthProvider>
        <LanguageTranslator.Provider
          value={{ language: languageData, setLanguage }}
        >
        </LanguageTranslator.Provider>
      </AuthProvider>
    );
   
   */
const LanguageTranslator = createContext<LanguageTranslator<any> | undefined>(
  undefined
);

// Custom hook to use the LanguageTranslator context
/**
 * useLanguageTranslator: Custom hook to use the LanguageTranslator context
 * @param language: Object representing the language translations (key:value pair)
 * @param setLanguage: Function to update the language (string value)
 * @returns Context to store the language translations and the function to update the language
 * @example
 * const { language: t, setLanguage } = useLanguageTranslator<LanguageObjectType>();
 * setLanguage("fr");
 * @usage
 * t.hello // "Bonjour" // "नमस्ते"... etc
 */
const useLanguageTranslator = <T,>(): LanguageTranslator<T> => {
  // Get the context value
  const context = useContext(LanguageTranslator);
  // If the context is undefined, throw an error
  if (context === undefined) {
    throw new Error(
      "useLanguageTranslator must be used within a LanguageTranslatorProvider"
    );
  }
  // Return the context value
  return context as LanguageTranslator<T>;
};

export { LanguageTranslator, useLanguageTranslator };
