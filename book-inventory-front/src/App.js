import React from 'react';
import { Providers } from './Commons';
import { Router } from './Router'

function App() {
  return (
    <React.StrictMode>

      <Providers>
        <Router />
      </Providers>
    </React.StrictMode>
  );
}

export default App;