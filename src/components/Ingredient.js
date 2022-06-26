import React from "react";
import styled from "styled-components";
// import data from '../data/alchemy-ingredients';

// { name, description, goodEffects, badEffects, image }
export default function Ingredient() {
  return (
    <Wrapper>
      <img src="https://images.uesp.net/4/4a/SR-flora-Nirnroot.jpg" alt="Nirnroot" />
      <footer>
        <h2>Nirnroot</h2>
        <p>Harvested from Nirnroot, found near bodies of water throughout Skyrim. Also respawns at the Sarethi Farm.</p>
        <div className="buttons">
          <button className="healthy">Restore Stamina</button>
          <button className="healthy">Fortify Sneak</button>
          <button className="danger">Weakness to Fire</button>
          <button className="danger">Fear</button>
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