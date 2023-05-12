import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// eslint-disable-next-line no-undef
console.log('App Version ', VERSION);
