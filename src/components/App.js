import React from 'react';
import pokemon from '../data/pokemon.json';
import PokeList from './PokeList';
import '../stylesheets/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="mainTitle">Gotta catch 'em all!!</h1>
        <PokeList data={pokemon} />
      </div>
    );
  }
}

export default App;
