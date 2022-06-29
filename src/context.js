import React, { useState, useEffect, useContext } from 'react';
import data from './data/alchemy-ingredients.json';

const IngredientContext = React.createContext();

const IngredientProvider = ({ children }) => {
  // alphabetically sort data
  const [ingredients, setIngredients] = useState(data);

  const filterIngredientsByClick = (effects, card) => {
    
    
    const newList = data.filter((item) => {
      if (item.name === card.name) return;

      if (item['good-effects']) {
        for (let effect of item['good-effects']) {
          if (effects.includes(effect.toLowerCase())) {
            return item;
          }
        }
      }

      if (item['bad-effects']) {
        for (let effect of item['bad-effects']) {
          if (effects.includes(effect.toLowerCase())) {
            return item;
          }
        }
      }
    });
    newList.unshift(card);
    setIngredients(newList);
  }

  return (
    <IngredientContext.Provider
      value={{
        ingredients,
        filterIngredientsByClick
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(IngredientContext);
}

export { IngredientProvider, IngredientContext }