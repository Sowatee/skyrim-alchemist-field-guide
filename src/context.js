import React, { useState, useEffect, useContext } from 'react';
import data from './data/alchemy-ingredients.json';

const IngredientContext = React.createContext();

const IngredientProvider = ({ children }) => {
  // alphabetically sort data
  const sorted = data.sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();
    return fa.localeCompare(fb);
  });


  

  const [ingredients, setIngredients] = useState(sorted);
  const [search, setSearch] = useState('');

  useEffect(() => {
    searchIngredients();
  }, [search]);

  useEffect(() => {
    window.scrollTo(0,0);
  });

  // resetting it to the default of displaying all data
  const resetIngredients = () => {
    setSearch('');
    setIngredients(sorted);
  }


  // grabbing the effects of the given ingredient
  const getEffects = (card) => {
    const effects = [];

    if (card['good-effects']) {
      for (let effect of card['good-effects']) {
        effects.push(effect.toLowerCase());
      }
    }
    if (card['bad-effects']) {
      for (let effect of card['bad-effects']) {
        effects.push(effect.toLowerCase());
      }
    }
    return effects;
  }


  // searching by name or one of the effects
  const searchIngredients = () => {
    if (search === "") {
      setIngredients(sorted);
    }
    const newList = sorted.filter((ingr) => {
      const ingrName = ingr.name.toLowerCase();
      const effects = getEffects(ingr);

      if (ingrName.includes(search.toLowerCase())) {
        return ingr;
      }

      for (let effect of effects) {
        if (effect.includes(search.toLowerCase())) {
          return ingr;
        }
      }

    });
    if (newList.length === 0) {

    }
    setIngredients(newList);
  }

  
  const filterIngredientsByClick = (card) => {
    
    const effects = getEffects(card);

    const newList = sorted.filter((item) => {
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
        search,
        setSearch,
        resetIngredients,
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