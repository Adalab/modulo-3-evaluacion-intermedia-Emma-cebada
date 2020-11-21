import React from 'react';
import dataPoke from '../data/dataPoke.json';
import PokeList from './PokeList';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataPoke,
    };
    // console.log(this.state); // Para ver si los datos me llegan correctamente.
  }
  render() {
    return (
      <div className="main-container">
        <h1 className="mainTitle">Gotta catch 'em all!!</h1>
        <PokeList data={this.state.data} />
      </div>
    );
  }
}

export default App;
