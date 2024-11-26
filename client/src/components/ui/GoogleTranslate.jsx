import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Function to load the Google Translate script
    const addGoogleTranslateScript = () => {
      if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      if (!window.googleTranslateElementInitialized) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
        window.googleTranslateElementInitialized = true;
      }
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;