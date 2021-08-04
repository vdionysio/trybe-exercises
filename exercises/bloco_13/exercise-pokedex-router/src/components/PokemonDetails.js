import React, { Component } from 'react';
import Pokemon from '../Pokemon';

class ExtraInfo extends Component {
  render() {
    const { match: {params: {pokemonId}}, pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id.toString() === pokemonId);
    const { name, foundAt, summary } = pokemon;
    return (
      <div>
        <h2>{name} Details</h2>
        {<Pokemon link={false} pokemon={pokemon}/>}
        <h2>Summary</h2>
        <p>{summary}</p>
        <h2>Game Location</h2>
        {foundAt.map((place, index) => {
          return (
            <div key={index}>
              <img src={place.map} alt={`ocurrence map of ${name}`}/>
              <p>{place.location}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ExtraInfo;