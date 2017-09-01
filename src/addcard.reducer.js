import { ADD_CARD } from './addcard.constants';

export default (state, { type, payload }) => {
    switch (type) {
        case ADD_CARD:
            return { name: state.name, genus: state.genus, species: state.species, description: state.description, url: state.url };
            default:
                return state;
    }
};