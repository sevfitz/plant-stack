import { ADD_CARD, GET_CARDS, FETCH_HAS_ERRORED, CARDS_ARE_LOADING } from './constants';
import api from './cardApi';

export function fetchHasErrored(boolean) {
    return {
        type: FETCH_HAS_ERRORED,
        hasErrored: boolean
    };
}

export function cardsAreLoading(boolean) {
    return {
        type: CARDS_ARE_LOADING,
        areLoading: boolean
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

export const addCard = makeAddCard(api);

export function makeGetCards(api) {
    return function getCards() {
        return (dispatch) => {
            return api
                .getAll()
                .then(cards => {
                    dispatch({ type: GET_CARDS, payload: cards });
                    return cards;
                });
        }
    }
}

export const getCards = makeGetCards(api);


