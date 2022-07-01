import React from 'react';
import './App.css';
import IngredientsList from './components/IngredientsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <IngredientsList />
      <Footer/>
    </>
  );
}

export default App;
