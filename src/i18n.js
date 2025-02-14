import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// استيراد ملفات اللغات يدويًا
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
