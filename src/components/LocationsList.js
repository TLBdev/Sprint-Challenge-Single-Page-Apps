import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap`

export default function LocationsList() {

    // TODO: Add useState to track data from useEffect
    const [locations, addLocations] = useState([])
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        axios.get('https://rickandmortyapi.com/api/location/')
            .then((response) => {
                console.log('input', response.data.results)
                addLocations(response.data.results)
            })
            .catch((err) => {
                console.log(err);

            })
    }, []);

    return (
        <section className="character-list">
            <StyledContainer>
                {locations.map((location) => {
                    return <LocationCard key={location.name} data={location} />
                })}
            </StyledContainer>
        </section>
    );
}