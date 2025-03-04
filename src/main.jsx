import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider, useTranslation } from 'react-i18next';
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App.jsx';
import "./i18n.js";
import i18n from "./i18n"; // تأكد من وجود ملف i18n.js في المشروع

function TitleUpdater() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("app.title"); // تحديث العنوان عند تغيير اللغة
  }, [i18n.language]);

  return null; // هذا الكومبوننت لا يعرض شيئًا
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <TitleUpdater />
      <App />
    </I18nextProvider>
  </StrictMode>,
);
