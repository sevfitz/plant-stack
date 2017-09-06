import { ADD_CARD, GET_CARDS, FETCH_HAS_ERRORED, CARDS_ARE_LOADING, CARDS_RETRIEVED } from './card.constants';
import api from '../services/cardApi';

export function fetchHasErrored(boolean) {
    return {
        type: FETCH_HAS_ERRORED,
        payload: boolean
    };
}

export function cardsAreLoading(boolean) {
    return {
        type: CARDS_ARE_LOADING,
        payload: boolean
    };
}

export function cardsRetrieved(cards) {
    return {
        type: CARDS_RETRIEVED,
        payload: cards
    };
}

export function addCard (card = {}) {
    return {
        type: ADD_CARD,
        payload: {
            name: card.name,
            genus: card.genus,
            species: card.species,
            description: card.description,
            url: card.url
        }
    };
}

export function makeAddCard(api) {
    return function addCard(card) {
        return (dispatch) => {
            return api
                .add(card)
                .then(card => dispatch({ type: ADD_CARD, payload: card }));
        }
    }
}