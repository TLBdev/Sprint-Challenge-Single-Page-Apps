import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap`

export default function CharacterList() {

  // TODO: Add useState to track data from useEffect
  const [characters, addCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        console.log('input', response.data.results)
        addCharacters(response.data.results)
      })
      .catch((err) => {
        console.log(err);

      })
  }, []);

  return (
    <section className="character-list">
      <StyledContainer>
        {characters.map((character) => {
          return <CharacterCard key={character.name} data={character} />
        })}
      </StyledContainer>
    </section>
  );
}
