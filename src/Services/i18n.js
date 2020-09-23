import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./../Locales/en/translation.json";
import translationES from "./../Locales/es/translation.json";
import translationPT from "./../Locales/pt/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  pt: {
    translation: translationPT,
  },
};
i18n
  .use(LanguageDetector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ["cookie"],
      caches: ["cookie"],
      cookieMinutes: 160,
    },
    fallbackLng: ["en"],
    resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    /* interpolation: {
      escapeValue: false // react already safes from xss
    } */
  });

export default i18n;
