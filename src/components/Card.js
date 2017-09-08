import React, { Component } from 'react';
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
        <div style={{ border: 'solid black 1px', width: 300, height: 400, margin: '50px auto' }}>
            <img style={{ maxHeight: 300 }} src={url} alt={description} />
            <p>Common Name: {name}</p>
            <div>
            <p style={{ fontSize: '1.5em', color: 'brown' }}>
                {choice}??
            </p>
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
    })}
)(Card);

