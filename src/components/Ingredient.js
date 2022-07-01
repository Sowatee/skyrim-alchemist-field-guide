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
  width: 90vw;
  margin: auto;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  text-transform: capitalize;
  letter-spacing: .1rem;
  box-shadow: 1px 2px 13px 3px rgba(255,255,255,0.46);
  background: #fff;
  transition: all linear 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  footer {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1rem;
  }

  .buttons {
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    grid-gap:1rem;
  }

  button {
    width: 45%;
    height: 2rem;
    background: #eff5f9;
    border: none;
    text-transform: uppercase;
    text-align: center;
    outline: 0;
    letter-spacing: .4;
    vertical-align: center;
    border-radius: 5px;
    font-weight: 550;
    font-size: 12px;
  }
  .healthy {
    background: #8DEBD3;
  }

  .danger {
    background: #E78A89;
  }



`