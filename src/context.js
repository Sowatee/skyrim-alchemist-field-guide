import React, { useState, useEffect, useContext } from 'react';
import data from './data/alchemy-ingredients.json';

const IngredientContext = React.createContext();

const IngredientProvider = ({ children }) => {
  // alphabetically sort data
  const [ingredients, setIngredients] = useState(data);

  const filterIngredientsByClick = (effects, card) => {
    const newList = [];

    for (let i = 0; i < data.length; i++) {

      if (data[i].name === card.name) {
        continue;
      }

      if (data[i]['good-effects']) {
        for (let effect of data[i]['good-effects']) {
          if (effects.includes(effect.toLowerCase())) {
            newList.push(data[i]);
            break;
          }
        }
      }
      // skip loop iteration if the item has already been added to the list otherwise duplicates occur
      if (newList.includes(data[i])) {
        continue;
      }

      if (data[i]['bad-effects']) {
        for (let effect of data[i]['bad-effects']) {
          if (effects.includes(effect.toLowerCase())) {
            newList.push(data[i]);
            break;
          }
        }
      }
    }
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