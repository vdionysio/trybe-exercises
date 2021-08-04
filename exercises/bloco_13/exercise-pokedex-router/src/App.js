import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';
import Favorites from './components/Favorites';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/favorite-pokemons">Favorite Pokemons</Link></li>
          </ul>
        <Switch>
          <Route
            exact
            path="/pokemons/:pokemonId"
            render={(props) => <PokemonDetails {...props} pokemons={pokemons}/>}
          />
          <Route
            exact
            path="/"
            render={() => <Pokedex pokemons={pokemons} />}
          />
          <Route path="/about" component={ About }/>
          <Route path="/favorite-pokemons" component={ Favorites }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;