import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap`

export default function SearchList() {

  // TODO: Add useState to track data from useEffect
  const [query, alterQuery] = useState('')
  const [results, setResults] = useState([])
  const [characters, addCharacters] = useState([])

  console.log('characters', characters)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {

        addCharacters(response.data.results)
      })
      .catch((err) => {
        console.log(err);

      })
  }, []);

  useEffect(() => {
    const searchResults = characters.filter(character => {
      return character.name.toLowerCase().includes(query.toLowerCase());
    })

    console.log('searchresults', searchResults)
    setResults(searchResults)
    console.log('results', results)
  }, [query])
  return (
    <section className="character-list">
      <Formik
        onSubmit={(values, tools) => {
          alterQuery(values.name)
          console.log(values.name)

        }}
        initialValues={{
          name: ''
        }}
        render={props => {
          return (
            <Form>
              <Field name='name' type='text' placeholder='Search ' />
              <input type='submit' />
            </Form>
          )
        }}
      />
      <StyledContainer>
        {results.map((character) => {
          return <CharacterCard key={character.name} data={character} />
        })}
      </StyledContainer>
    </section>
  );
}
