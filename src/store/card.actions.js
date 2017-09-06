import { ADD_CARD, GET_CARDS, FETCH_HAS_ERRORED, CARDS_ARE_LOADING, CARDS_RETRIEVED } from './card.constants';
import api from '../services/cardApi';

export function fetchHasErrored(boolean) {
    return {
        type: FETCH_HAS_ERRORED,
        hasErrored: boolean
    };
}

export function cardsAreLoading(boolean) {
    console.log('in cardsAreLoading', boolean);
    return {
        type: CARDS_ARE_LOADING,
        areLoading: boolean
    };
}

// export function cardsRetrieved(cards) {
//     return {
//         type: CARDS_RETRIEVED,
//         payload: cards
//     };
// }

export function makeAddCard(api) {
    return function addCard(card) {
        return (dispatch) => {
            return api
                .add(card)
                .then(card => dispatch({ type: ADD_CARD, payload: card }));
        }
    }
}

export const addCard = makeAddCard(api);

export function makeGetCards(api) {
    return function getCards() {
        return (dispatch) => {
            return api
                .getAll()
                .then(cards => {
                    console.log('inside getCards, cards are', cards);
                    dispatch({ type: GET_CARDS, payload: cards })
                });
        }
    }
}

export const getCards = makeGetCards(api);


