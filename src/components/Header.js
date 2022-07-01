import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context';



export default function Header () {
  const {search, setSearch, resetIngredients} = useGlobalContext();

  return (
    <Wrapper>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." value={search}/>
      <button onClick={() => resetIngredients()}>reset</button>
    </Wrapper>
  );

}

const Wrapper = styled.header`

  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100vw;
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  input {
    width: 70%;
    height: 3rem;
    border: none;
    text-transform: uppercase;
    letter-spacing: .3rem;
    border-radius: 3rem;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    height: 2rem;
    width: 20%;
    max-width: 5rem;
    border: none;
    border-radius: 1rem;
    background-color: darkred;
    color: white;
    text-transform: uppercase;
    letter-spacing: .2rem;
    text-align: center;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }
  }
`