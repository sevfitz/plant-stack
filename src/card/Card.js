import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


Card.PropTypes = {
  name: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired
};

export function Card(props) {
  const { selection, selectedCard } = props;

  return (
    <div>
      <header className="card-header">
        <p className="card-header-title is-4 is-centered">Common Name: {selectedCard.name}</p>   
      </header>
      <div className="card-image">
        <figure className="image is-128x256" style={{ margin: "20px" }}>
          <img src={selectedCard.url} alt={selectedCard.description} />
        </figure>
      </div>
      <div className="columns">
        <div className="column is-centered">
          <div className="card-content is-paddingless">
            <p className="title is-6" style={{ fontSize: "1.5em", color: "brown", marginBottom: "20px" }}>{selection.choice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => {
    return ({
      name: state.name,
      genus: state.genus,
      species: state.species,
      description: state.description,
      url: state.url,
      choice: state.choice
    })
  }
)(Card);

