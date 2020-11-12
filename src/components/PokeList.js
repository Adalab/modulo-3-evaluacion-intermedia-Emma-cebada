import React from 'react';
import PropTypes from "prop-types";
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const pokeCards = this.props.data.map((item) => {
      return (
        <li className="pokeList" key={item.id}>
          <Pokemon url={item.url} name={item.name} type={item.types} />
        </li>
      )
    })
    return (
      <ul className="classList">{pokeCards}</ul>
    )
  }
}

PokeList.propsTypes = {
  data: PropTypes.array,
}

export default PokeList;