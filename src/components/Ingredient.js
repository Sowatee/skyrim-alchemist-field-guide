import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from "../context";

export default function Ingredient(item) {
  const { filterIngredientsByClick } = useGlobalContext();

  return (
    <Wrapper onClick={() => filterIngredientsByClick(item)}>
      <img src={item.image} alt={item.name} />
      <footer>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="buttons">
          {
            item['good-effects'] && item['good-effects'].map((effect) => {
              return <button className="healthy" key={uuidv4()}>{effect}</button>
            })
          }
          {
            item['bad-effects'] && item['bad-effects'].map((effect) => {
              return <button className="danger" key={uuidv4()}>{effect}</button>
            })
          }
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @media screen and (min-width: 756px) {
    max-width: 400px;
  }
  width: 95vw;
  margin: 5rem auto;
  border: 1px solid #ccc;
  border-radius: 1rem;
  text-transform: capitalize;
  letter-spacing: .1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  &:hover {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  footer {
    padding: 1.5rem 1rem 1rem 1rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    letter-spacing: .2rem;
  }

  .buttons {
    width: 100%;
    margin-top: 2rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    grid-gap:1rem;


  }

  button {
    width: 40%;
    margin-right: 10px;
    background: #eff5f9;
    border: none;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    outline: 0;
    letter-spacing: .4;
    padding: .3rem;
    min-width: fit-content;
    border-radius: 5px;
    font-weight: 550;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
  .healthy {
    background: #8DEBD3;
  }

  .danger {
    background: #E78A89;
  }



`