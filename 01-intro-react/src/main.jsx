import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgb(77, 106, 119), rgb(204, 207, 209))',
        gap: '20px', /* espacio entre tarjetas */
        flexWrap: 'wrap', /* pantallas pequeñas */
      }}
    >
      <App />
    </main>
  </StrictMode>
);
