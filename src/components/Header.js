import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context';



export default function Header () {
  const {setSearch, resetIngredients} = useGlobalContext();

  return (
    <Wrapper>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or effect"/>
      <button onClick={() => resetIngredients()}>reset</button>
    </Wrapper>
  );

}

const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`