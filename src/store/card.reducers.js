import { ADD_CARD, GET_CARDS, FETCH_HAS_ERRORED, CARDS_ARE_LOADING } from './card.constants';

export function fetchHasErrored(state = false, { type, hasErrored }) {
    switch (type) {
        case FETCH_HAS_ERRORED:
            return hasErrored;
        default:
            return state;
    }
}

export function cardsAreLoading(state = false, { type, areLoading }) {
    switch (type) {
        case CARDS_ARE_LOADING:
            return areLoading;
        default:
            return state;
    }
}

export function cards(state = [], { type, payload }) {
    switch (type) {
        case GET_CARDS:
            return payload;
        case ADD_CARD:
            return [
                ...state,
                payload
            ];
        default:
            return state;
    }
}