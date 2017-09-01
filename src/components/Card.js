import React, { Component } from 'react';
import PropTypes from 'prop-types';

Card.PropTypes = {
    name: PropTypes.string.isRequired,
    genus: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export function Choice({ genus, species }) {
    const choiceArray = [genus, species];
    const index = Math.floor(Math.random() * choiceArray.length);
    return (
        <p>
            {choiceArray[index]}
        </p>
    );
}

// description from https://en.wikipedia.org/wiki/Lavandula_angustifolia: 
// English lavender is commonly grown as an ornamental plant. It is popular for its colourful flowers, its fragrance, and its ability to survive with low water consumption.
// lavender img: http://thegraphicsfairy.com/wp-content/uploads/2013/08/Lavender-Botanical-Printable-GraphicsFairysm.jpg

export function Card({ name, genus, species, description, url }) {
    
    return (
        <div style={{ border: 'solid black 1px', width: 300, height: 400, margin: '50px auto' }}>
            <img style={{ maxHeight: 300 }} src={url} alt={description} />
            <p>Common Name: {name}</p>
            <div><Choice genus={genus} species={species} /></div>
        </div>
    );
}

