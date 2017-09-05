import { ADD_CARD } from './addcard.constants';

export function fetchHasErrored(state = false, { type, hasErrored }) {
    switch (type) {
        case 'FETCH_HAS_ERRORED':
            return hasErrored;
        default:
            return state;
    }
}

export function cardsAreLoading(state = false, { type, areLoading }) {
    switch (type) {
        case 'CARDS_ARE_LOADING':
            return areLoading;
        default:
            return state;
    }
}

export function cards(state = [], { type, payload }) {
    switch (type) {
        case 'CARDS_RETRIEVED':
            return payload;
        case ADD_CARD:
            return [
                ...state,
                { 
                name: payload.name, 
                genus: payload.genus, 
                species: payload.species, 
                description: payload.description, 
                url: payload.url 
                }
            ];
        default:
            return state;
    }
}