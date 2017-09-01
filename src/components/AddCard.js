import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../addcard.actions';

export function AddCard({ name, genus, species, description, url, dispatch }) {
    return (
        <div>
            <form>
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

                <button type="submit" onClick={e => dispatch(addCard(e.target.value))}>Add Plant</button>   
            </form>
        </div>
    );
}

export default connect(
    state => ({ name: state.name, genus: state.genus, species: state.species, description: state.description, url: state.url })
)(AddCard);
