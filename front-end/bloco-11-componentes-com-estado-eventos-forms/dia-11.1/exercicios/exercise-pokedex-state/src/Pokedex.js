import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  state = {
    index: 0,
    types: 'Electric',
  }

  handleClickNext = () => {
    this.setState((state) => ({
      index: (state.index + 1),
    }));
  }

  handleClickFilter = ({ target }) => {
    this.setState({ types: target.id });
  }

  render() {
    const { index, types } = this.state;
    const { pokemons } = this.props;
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type.includes(types));
    const showPokemons = filteredPokemons.map((pokemon) => (
      <Pokemon key={ pokemon.id } pokemon={ pokemon } />));
    return (
      <div>
        <div className="pokedex">
          {showPokemons[index % filteredPokemons.length]}
        </div>
        <div>
          <button type="button" id="Fire" onClick={ this.handleClickFilter }>Fire</button>
          <button
            type="button"
            id="Psychic"
            onClick={ this.handleClickFilter }
          >
            Psychic
          </button>
          <button
            type="button"
            id="Electric"
            onClick={ this.handleClickFilter }
          >
            Electric
          </button>
          <button
            type="button"
            id="Bug"
            onClick={ this.handleClickFilter }
          >
            Bug
          </button>
          <button
            type="button"
            id="Poison"
            onClick={ this.handleClickFilter }
          >
            Poison
          </button>
          <button
            type="button"
            id="Dragon"
            onClick={ this.handleClickFilter }
          >
            Dragon
          </button>
          <button
            type="button"
            id="Normal"
            onClick={ this.handleClickFilter }
          >
            Normal
          </button>
        </div>
        <div>
          <button type="button" onClick={ this.handleClickNext }>Next</button>
          <button type="button" id="" onClick={ this.handleClickFilter }>All</button>

        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
