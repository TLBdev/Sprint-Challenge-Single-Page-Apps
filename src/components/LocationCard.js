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
    text-align: center;
    flex-direction: column;
    img{
      width: 90%
    }
`

export default function CharacterCard(props) {
  return (

    <StyledCard>
      <h1>{props.data.name}</h1>

      <h2>Dimension: {props.data.dimension}</h2>
      <h3>Type: {props.data.type}</h3>

    </StyledCard>
  )

}