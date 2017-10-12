import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Card.PropTypes = {
  name: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export function Card(props) {
  const { card, choice } = props;
  const { name, description, url } = card;
  return (
    <div className='card' style={{ margin: '20', padding: '20' }}>
      <div className='card-image'>
        <figure className='image is-128x256'>
          <img src={url} alt={description} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>Common Name: {name}</p>
          <p className='title is-6' style={{ fontSize: '1.5em', color: 'brown' }}>{choice}??</p>
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
      url: state.url
    })
  }
)(Card);

