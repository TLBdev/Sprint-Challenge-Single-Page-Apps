import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import { Route, NavLink } from 'react-router-dom'
import SearchForm from "./components/SearchForm.js";
import LocationList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import styled from 'styled-components'

const StyledNav = styled.div`
      display: flex;
      justify-content: space-evenly
      a{
        text-decoration: none;
      }
`

export default function App() {
  return (
    <main>
      <Header />
      <StyledNav>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/characters'} >Cast</NavLink>
        <NavLink to={'/search'} >Search</NavLink>
        <NavLink to={'/locations'} >Locations</NavLink>
        <NavLink to={'/episodes'} >Episodes</NavLink>
      </StyledNav>
      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route exact path='/characters' render={props => <CharacterList {...props} />} />
      <Route exact path='/search' render={props => <SearchForm {...props} />} />
      <Route exact path='/locations' render={props => <LocationList {...props} />} />
      <Route exact path='/episodes' render={props => <EpisodeList {...props} />} />
    </main>
  );
}
