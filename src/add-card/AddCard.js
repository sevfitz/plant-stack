import React from 'react';
import { connect } from 'react-redux';
import { addCard } from './actions';

export function AddCard({ dispatch }) {
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


            {/* test form for S3 bucket */}
            <input type="file" id="file-input"/>
            <p id="status">Please select a file</p>
            <img id="preview" src="http://thegraphicsfairy.com/wp-content/uploads/2013/08/Lavender-Botanical-Printable-GraphicsFairysm.jpg" />

            <form method="POST" action="/save-details">
                <input type="hidden" id="image-upload-url" name="image-upload-url" value="http://thegraphicsfairy.com/wp-content/uploads/2013/08/Lavender-Botanical-Printable-GraphicsFairysm.jpg" />
                <input type="text" name="name" placeholder="Common Name" /><br/>
                <input type="text" name="genus" placeholder="Genus" /><br/>
                <input type="text" name="species" placeholder="Species" /><br/>
                <input type="text" name="description" placeholder="Description" /><br/>
                <input type="text" name="url" placeholder="URL" />
                <input type="submit" value="Add Card" />
            </form>

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
)(AddCard);
