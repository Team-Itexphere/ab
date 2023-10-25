import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './routes';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;