import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";
import { DEFAULT_LANGUAGE } from "./constants";

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "common",
  ns: ["common"],
});

export default i18n;
