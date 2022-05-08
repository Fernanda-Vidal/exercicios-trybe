import './App.css';
import pokemons from './Data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className='App'>
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
