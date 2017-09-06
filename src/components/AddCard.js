import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../store/card.actions';

export function AddCard({ dispatch }) {
    console.log('dispatch is', dispatch);
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { name, genus, species, description, url } = form.elements;
                dispatch(addCard({name: name.value, genus: genus.value, species: species.value, description: description.value, url: url.value}));
                form.reset();
            }}>
                <title>Add A Plant to the Game!</title>
                <label htmlFor="name">Common Name:</label>
                <input id="name" name="name" />

                <label htmlFor="genus">Genus:</label>
                <input id="genus" name="genus" />

                <label htmlFor="species">Species:</label>
                <input id="species" name="species" />

                <label htmlFor="description">Description:</label>
                <input id="description" name="description" />

                <label htmlFor="url">Image url:</label>
                <input id="url" name="url" />

                <button type="submit">Add Plant</button>   
            </form>
        </div>
    );
}

export default connect(
    state => {
        console.log('state is', state);
        return ({ 
            name: state.name, 
            genus: state.genus, 
            species: state.species, 
            description: state.description, 
            url: state.url 
    })}
)(AddCard);
