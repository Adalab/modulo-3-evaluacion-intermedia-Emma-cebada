import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const typeList = this.props.type.map((item, i) => {
      return (
        <li className="pokeList" key={i}>
          {item}
        </li>
      )
    })
    return (
      <div className="pokeCard">
        <img className="pokeImg" src={this.props.url} alt={this.props.name}></img>
        <div className="textContainer">
          <h2 className="pokeName">{this.props.name}</h2>
          <ul className="pokeType-list">{typeList}</ul>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
}

export default Pokemon;