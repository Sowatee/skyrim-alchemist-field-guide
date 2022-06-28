import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IngredientProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IngredientProvider>
      <App />
    </IngredientProvider>

  </React.StrictMode>
);

