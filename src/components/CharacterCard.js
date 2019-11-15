import React from 'react';

import styled from 'styled-components'

const StyledCard = styled.div`
    width: 30%;
    padding: 2% 0%;
    margin: 2%;
    background: rgba(0,0,0,.6);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
      width: 90%
    }
`

export default function CharacterCard(props) {
  return (

    <StyledCard>
      <h1>{props.data.name}</h1>
      <img src={props.data.image} />
      <h2>Species: {props.data.species}</h2>
      <h3>Status: {props.data.status}</h3>

    </StyledCard>
  )

}