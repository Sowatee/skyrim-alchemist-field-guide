import React from "react";
import Ingredient from './Ingredient';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from "../context";

export default function IngredientsList() {
  const { ingredients } = useGlobalContext();

  return (
    <Wrapper>
      {ingredients.length > 0 ? (
        
          ingredients.map((item) => {
            return <Ingredient key={uuidv4()} {...item} />
          })
              
      ) : <h2 className="error">There are no ingredients that match your input</h2>}

    </Wrapper>

  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 15vh 0;
  .error {
    color: white;
  }
`