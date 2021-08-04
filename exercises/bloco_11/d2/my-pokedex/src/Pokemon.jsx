import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  
  render () {
    const { pokemon } = this.props;
    // const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p> Avarage weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={pokemon.image} alt="imagem do pokemon"/>
      </div>
    );
  }
}


Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;