import { ADD_CARD } from './addcard.constants';

export function fetchHasErrored(boolean) {
    return {
        type: 'FETCH_HAS_ERRORED',
        hasErrored: boolean
    };
}

export function cardsAreLoading(boolean) {
    return {
        type: 'CARDS_ARE_LOADING',
        areLoading: boolean
    };
}

export function cardsRetrieved(cards) {
    return {
        type: 'CARDS_RETRIEVED',
        cards
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