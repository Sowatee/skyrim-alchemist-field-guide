import React from "react";
import data from '../data/alchemy-ingredients.json';
import Ingredient from './Ingredient';

export default function IngredientsList() {
  return (
    <>
      {
        Object.entries(data).map((item) => {
          return <Ingredient key={item[1].id} {...item[1]} />
        })
      }
    </>

  );
}